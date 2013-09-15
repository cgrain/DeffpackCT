// ==UserScript==
// @name            GM massatagger_test
// @author          Tjeerdo & cgrain
// @version         1.0i    
// @description     test
// @include         http://nl*.tribalwars.nl/game.php?*
// ==/UserScript==

(function (f) {
    var d = document,
        s = d.createElement('script');
    s.textContent = '$(document).ready(' + f.toString() + ')';
    (d.body || d.head || d.documentElement).appendChild(s);
})(function () {
    function getTimeFromTW(str) {
		// NOTE: huh this actually returns the current date
		// with some new properties with the "str" time
		//17:51:31
		var timeParts = str.split(":");
		var seconds = timeParts[2];
		var val = {};
		val.hours = parseInt(timeParts[0], 10);
		val.minutes = parseInt(timeParts[1], 10);
		if (seconds.length > 2) {
			var temp = seconds.split(".");
			val.seconds = parseInt(temp[0], 10);
			val.milliseconds = parseInt(temp[1], 10);
		} 
		else {
			val.seconds = parseInt(seconds, 10);
		}
		val.totalSecs = val.seconds + val.minutes * 60 + val.hours * 3600;
		return val;
	}
	function getDateFromTW(str, isTimeOnly) {
		//13.02.11 17:51:31
		var timeParts, seconds;
		if (isTimeOnly) {
			timeParts = str.split(":");
			seconds = timeParts[2];
			var val = new Date();
			val.setHours(timeParts[0]);
			val.setMinutes(timeParts[1]);
			if (seconds.length > 2) {
				var temp = seconds.split(".");
				val.setSeconds(temp[0]);
				val.setMilliseconds(temp[1]);
			} else {
				val.setSeconds(seconds);
			}
			return val;
		} 
		else {
			var parts = str.split(" ");
			var dateParts = parts[0].split(".");
			timeParts = parts[1].split(":");
			seconds = timeParts[2];
			var millis = 0;
			if (seconds.length > 2) {
				var temp = seconds.split(".");
				seconds = temp[0];
				millis = temp[1];
			} if (dateParts[2].length == 2) {
				dateParts[2] = (new Date().getFullYear() + '').substr(0, 2) + dateParts[2];
			}

			return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0], timeParts[0], timeParts[1], seconds, millis);
		}
	}
	
	function getlooptijd(x1,y1, x2, y2, unit, aankomsttijd) {
		var dist = {};
		
		dist.fields = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
		
		var speed = v;
		dist.tijdsduur = speed* dist.fields;
		dist.minuuttijdsduur = Math.floor(dist.tijdsduur % 60);
		dist.uurtijdsduur = Math.floor(dist.tijdsduur/ 60);
		var minuten = Math.floor(dist.tijdsduur);
		var seconden = (dist.tijdsduur -minuten) * 60;
		dist.secondentijdsduur = Math.round(seconden);
		dist.aankomsttijd = getDateFromTW(aankomsttijd, false);
		// VERZENDTIJD:
		var remainder = 0;
		if ((dist.aankomsttijd.getSeconds()-dist.secondentijdsduur -remainder) >= 0) 
		{
		//bugalert(dist.aankomsttijd.getHours());
		dist.verzendseconde = dist.aankomsttijd.getSeconds()-dist.secondentijdsduur;
		//bugalert(dist.verzenduur);
		}
		else {
		remainder = 1;
		dist.verzendseconde = dist.aankomsttijd.getSeconds()-dist.secondentijdsduur + 60;
		}
		if ((dist.aankomsttijd.getMinutes()-dist.minuuttijdsduur -remainder) >= 0) 
		{
		//bugalert(dist.aankomsttijd.getHours());
		dist.verzendminuut = dist.aankomsttijd.getMinutes()-dist.minuuttijdsduur;
		}
		else {
		remainder = 1;
		dist.verzendminuut = dist.aankomsttijd.getMinutes()-dist.minuuttijdsduur + 60;
		}
		
		if ((dist.aankomsttijd.getHours()-dist.uurtijdsduur -remainder) >= 0) 
		{
		//bugalert(dist.aankomsttijd.getHours());
		dist.verzenduur = dist.aankomsttijd.getHours()-dist.uurtijdsduur;
		//bugalert(dist.verzenduur);
		}
		else {
		remainder = 1;
		dist.verzenduur = dist.aankomsttijd.getHours()-dist.uurtijdsduur + 24;
		}
		//bugalert(dist.verzenduur + ":" +dist.verzendminuut+ ":"+ dist.verzendseconde); 
		return dist;
	}
		if(localStorage.getItem("AR_Unit_Config") === null) {
        var URL_UnitInfo = "http://" + game_data.world + ".tribalwars.nl/interface.php?func=get_unit_info";
        $.ajax({
            url: URL_UnitInfo,
            success: function (UnitResult) {
                var AR_Unit_Config = {
                    'Speer/Bijl': parseFloat($(UnitResult).find("spear").find("speed").text()),
                    'Zwaard': parseFloat($(UnitResult).find("sword").find("speed").text()),
                    'Boog':parseFloat($(UnitResult).find("archer").find("speed").text()),
                    'Scouts':parseFloat($(UnitResult).find("spy").find("speed").text()),
                    'LC':parseFloat($(UnitResult).find("light").find("speed").text()),
                    'Bereden Boog': parseFloat($(UnitResult).find("marcher").find("speed").text()),
                    'ZC':parseFloat($(UnitResult).find("heavy").find("speed").text()),
                    'Ram/Kata': parseFloat($(UnitResult).find("ram").find("speed").text()),
                    'snob':parseFloat($(UnitResult).find("snob").find("speed").text())
                    
                }
                localStorage.setItem('AR_Unit_Config', JSON.stringify(AR_Unit_Config))
            }
        });
        }
        var AR_Unit_Config = JSON.parse(localStorage.getItem("AR_Unit_Config"));
        
		if (game_data.mode == "incomings") {
		$("#incomings_table tr:first th:first").append("<input type='button' id='AR_massatagger' value='Aanvallen taggen'>");
        $("#AR_massatagger").click(function(){
			$("#incomings_table tr.nowrap").each(function(){
				if($(this).find("input[id*='editInput']").val().match(/Aanval/i)) {
					var own_village = $(this).html().match(/\d{3}\|\d{3}/)[0]
					var other_village = $(this).find("a[href*='&screen=info_village']").html().match(/\d{3}\|\d{3}/),
					f = own_village.toString().split("|"),
					t = other_village.toString().split("|"),
					fields = Math.sqrt(Math.pow(parseInt(f[0])-parseInt(t[0]),2)+Math.pow(parseInt(f[1])-parseInt(t[1]),2));
					var times = [];
					$.each(AR_Unit_Config, function(k,v){
						if(v != null) {
						times.push(k + " - " + (fields*(v/60)))
						}
					})
					var remaining_time = $(this).find(".timer").text().split(":");
					var remaining_time_decimal = (parseInt(remaining_time[0]) + ((parseInt(remaining_time[1])+(parseInt(remaining_time[2])/60))/60));
					var possible_times = [];
					for(i=0;i<times.length;i++){
						var w = times[i].toString().split(" - ");
						if(parseFloat(w[1]) > remaining_time_decimal) {
							var temp = w[1] + " - " + w[0]
							possible_times.push(temp);
						}
					}
					possible_times.sort(function(a, b) {
						function j(a) {
							var w2 = a.toString().split(" - "); 
							var u = 0;
							u += parseFloat(w2[0]);
							return u
						}
						return j(a) - j(b); 
					});
					$(this).find("input[id*='editInput']").val(possible_times[0].split(" - ")[1]).next("input").click();
				}
			})
        })
		}
		else if (location.href.indexOf('screen=info_command') > -1) {
			alert("Tja");
			var infotable = $("#content_value").find("table:eq(0)");
			var herkomstdorp = $(infotable).find("tr:contains('Herkomst')").next().find("td:eq(1)");
			var doeldorp = $(infotable).find("tr:contains('Doel')").next().find("td:eq(1)");
			herkomstcoord = herkomstdorp.text().match(/(\d+)\|(\d+)/);
			doelcoord = doeldorp.text().match(/(\d+)\|(\d+)/);		
			var aankomsttijd = $(infotable).find("tr:contains('Aankomst:')").find("td:eq(1)").text();
			var aankomstin = $(infotable).find("tr:contains('Aankomst in:')").find("td:eq(1)").text().split(":");
			var looptijden = [];
			$.each(AR_Unit_Config, function(k,v){
				if(v != null) {
					var looptijd = getlooptijd(herkomstcoord[1], herkomstcoord[2], doelcoord[1], doelcoord[2], v, aankomsttijd);
					if ((aankomstin[1] == looptijd.uurtijdsduur && aankomstin[2] == looptijd.minuuttijdsduur && aankomstin[3] > looptijd.secondentijdsduur)|| (aankomstin[1] == looptijd.uurtijdsduur && aankomstin[2] > looptijd.minuuttijdsduur) || (aankomstin[1] == looptijd.uurtijdsduur)) {
						looptijden.push(v +" - " + k);
						
					}
				}
			});
			looptijden.sort(function(a, b) {
				function j(a) {
					var w2 = a.toString().split(" - "); 
					var u = 0;
					u += parseFloat(w2[0]);
					return u
				}
				return j(a) - j(b); 
			});
			$("input[id*='editInput']").val(looptijden[0].split(" - ")[1]).next("input").click();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		}
});