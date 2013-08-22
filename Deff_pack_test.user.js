// ==UserScript==
  
// @name            GM Deff-pack
  
// @author          Tjeerdo & Cgrain
// @version         1.0i   
// @description     Deff-pack
// @include         http://nl*.tribalwars.nl/game.php?*
// @exclude         http://nl*.tribalwars.nl/game.php?*screen=am_farm*
  
/* Functionaliteiten:
 * Verbeterde OS-aanvrager
 *
 */
  
/* TO-DO List:
 * Massa-tagger
 * Stack-beoordelaar
 */
  
// ==/UserScript==

(function (f) {
    var d = document,
        s = d.createElement('script');
    s.textContent = '$(document).ready(' + f.toString() + ')';
    (d.body || d.head || d.documentElement).appendChild(s);
})(function () {
    
var win = window.main ? window.main : window,
gd = win.game_data;
//Settings.
var settings = {};
if (localStorage['CTPack-Settings'] === undefined) { 
		settings['Stackbeoordeling'] = "muur";
		settings['Offopp']= [0,0,7000,0,0,3000,0,0,300,0,0,0];
		settings['mobdef']= [7000,0,0,7000,0,0,0,1500,5,0,0,0];
		localStorage['CTPack-Settings']= JSON.stringify(settings);
}
settings = JSON.parse(localStorage['CTPack-Settings']);
$('#footer_left').append('<a href="#" id="deffsettings"> - <img src="http://cdn2.tribalwars.net/graphic/unit/att.png"/></a>');

$("#deffsettings").click(function() {
    a = document.createElement("div");
	a.id = "Deffsettings";
	a.style.cssText = "background-color:#ecd6ad;border:2px solid #7d510f;z-index:5;top:130px;left:40%;position:absolute;padding-top:7px;padding-left:7px;width:400px;border-radius:7px;box-shadow:0 0 50px 15px #000000;";
	document.body.appendChild(a);
	var menu =  '<h2 style="text-align: center;">settings Deff-Pack</h2><table><tr><td>';
	menu += 'Stack:<select><option name="muur">Muur niet zakken! MEER OPTIES VOLGEN IN VOLGENDE VERSIE! </option></select></td></tr>';
	menu += '<tr><td>Normale Clear:</td></tr><tr><td><table id="Offopp" class="vis"><tr><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png?48b3b" title="Speervechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png?b389d" title="Zwaardvechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png?51d94" title="Bijlstrijder" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_archer.png?db2c3" title="Boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png?eb866" title="Verkenner" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png?2d86d" title="Lichte cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_marcher.png?ad3be" title="Bereden boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png?a83c9" title="Zware cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png?2003e" title="Ram" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_catapult.png?5659c" title="Katapult" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_snob.png?0019c" title="Edelman" alt="" class="" /></th></tr><tr><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td "><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td></tr></td></tr></table></td></tr><tr><td>Mobiel! Def-dorp:</td></tr><tr><td><table id="mobdef" class="vis"><tr><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png?48b3b" title="Speervechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png?b389d" title="Zwaardvechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png?51d94" title="Bijlstrijder" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_archer.png?db2c3" title="Boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png?eb866" title="Verkenner" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png?2d86d" title="Lichte cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_marcher.png?ad3be" title="Bereden boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png?a83c9" title="Zware cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png?2003e" title="Ram" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_catapult.png?5659c" title="Katapult" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_snob.png?0019c" title="Edelman" alt="" class="" /></th></tr><tr><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td "><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td></tr></td></tr></table>';
	menu += '<tr><td><a id="Deffsluiten" href="javascript:void(0)">sluiten</a></tr></td></table>';
	a.innerHTML = menu;
	$('option[name=' + settings['Stackbeoordeling'] + ']').attr('selected', true);
	var definput = $('#mobdef input');
	var offinput = $('#Offopp input');
	definput.attr('value', function(arr){ return settings['mobdef'][arr];});
	offinput.attr('value', function(arr){ return settings['Offopp'][arr];});
	$("#Deffsluiten").click(function(){
		settings['Stackbeoordeling'] = $("select:eq(0) option:selected").attr("name").toString();
		//settings['Offopp']= [0,0,7000,0,0,3000,0,0,300,0,0,0];
		settings['Offopp'] = [];
		offinput.each(function(){
			settings['Offopp'].push($(this).val());
		});
		var kritiek = 0;
		var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
		var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
		var boogoff = settings['Offopp'][6] *120;
		var totoff = infoff + cavoff + boogoff; 
		settings['infquota'] = infoff/totoff;
		var cavquota = cavoff/totoff;
		var boogquota = boogoff/totoff;
		var max = settings['Offopp'][8] * 2 / 45;
		var maxratio = 0.5/max;
		var maxratiostuk = maxratio/3;
		// settings['infquota'] * X + cavquota * y + boogquota * Z; 3 Variabelen: Vergelijking is niet op te lossen. Creatief zijn dus.
		// settings['infquota' *X < maxratiostuk
		var x = maxratiostuk/settings['infquota'];
		var y = maxratiostuk/cavquota;
		var z = maxratiostuk/boogquota;
		// X = (att/def) ^1.5 X^(2/3) = (totoff/def(inf))
		settings['definf'] = totoff/Math.pow(x,(2/3));
		settings['cavinf'] = totoff/Math.pow(y,(2/3));
		settings['booginf']= totoff/Math.pow(z,(2/3));
		settings['mobdef']= [];
		definput.each(function(){
			settings['mobdef'].push($(this).val());
		});
		localStorage['CTPack-Settings']= JSON.stringify(settings);
		$("#Deffsettings").remove();
	});
});
// All global declarations. 
var unitStat = [[10, 15, 45, 20], [25, 50, 15, 40], [40, 10, 5, 10], [15, 50, 40, 5], [0, 2, 1, 2], [130, 30, 40, 30], [120, 40, 30, 50], [150, 200, 80, 180], [2, 20, 50, 20], [100, 100, 50, 100],[150, 250, 400, 150], [30, 100, 50, 100]]


//all Functions.
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

	function stackinc (inc, stack, moraal) {// stack is een array van alle troepen in defdorp aanwezig. inkomende supports wel/niet meerekenen is nog een open vraag. dat mag jij besluiten. 
	var stacktel = [];
	for (var i=0;i<3;i++) {
		stacktel[i] = 0;
		for (var j=0;j<11;j++)
		{
			var x = i + 1;
			//alert(typeof unitStat[j][x]);
			//alert(typeof stack[j]);
			//alert(typeof stacktel[i]);
			
			stacktel[i] = (stacktel[i] + stack[j] * unitStat[j][x]) * 1;
			//alert(i + "x" + j + "--" + stacktel[i]);
		}
		//alert(stacktel[i]);
	}
	
	switch (settings['Stackbeoordeling']) {
	case "muur":
		var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
		var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
		var boogoff = settings['Offopp'][6] *120;
		var totoff = infoff + cavoff + boogoff;
		//alert(totoff);
		var max = settings['Offopp'][8] * 2 / 45;		
		var total = [0,0];
		var wall = [20,10,10];
		var Ratio = [0,0,0,0];
		var n = 0;
		for (var i =0;i<inc;i++) {
			n++;
				//alert("dit is de " + n + "de aanval"); 
			wall[2] = 20 + 50* wall[1];
			var multD = Math.pow(1.037, wall[1]);
			
			//alert("de verdediging heeft een muurbonus van: " + multD);
			for (var j = 0; j< 3; j++) {
				stacktel[j] *= multD;
				//alert("klaar voor de aanval?");
				//alert(totoff + "--" + stacktel[j]);
				if (totoff > stacktel[j]) {
				alert("aanvaller wint?"); 
				Ratio[j] = 1; 
				}
				else if (totoff == stacktel[j]) { 
					alert("dit is theoretisch zeer onwaarschijnlijk. "); // Zie hier hetzelfde als hierboven. 
				}
				else if (totoff < stacktel[j]) {
				alert("verdediging wint"); 
					Ratio[j] = Math.pow(totoff/stacktel[j], 1.5);
				}
			}
			if(totoff ==0) {totoff=1;}
			Ratio[3] = (infoff * Ratio[0] + cavoff * Ratio[1] + boogoff * Ratio[2])/totoff;// Zoveel gaat er van ieder dood. van elke soort troep gaat hetzelfde percentage dood. 
			if (Ratio[3] ==1) {
			return 7;//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD WORDEN. we kunnen ook een string terugkeren, met de zin: je troepen worden compleet weggevaagd. dit is altijd bij de eerste clear, want als het er meer zijn dan wordt al eerder uitgerekend dat de muur het eerder begeeft. en dan stopt de loop, als het goed is. ;
			}
			if (n ==1) { var Rationis = Ratio[3] * stacktel[0];}
		
			stacktel[0] = stacktel[0] * Ratio[3];
			stacktel[1] = stacktel[1] * Ratio[3];
			stacktel[2] = stacktel[2] * Ratio[3];// Dit zou korter moeten kunnen. 
			var muurzakt = Ratio[3] * max;
			if (muurzakt >= 0.5) { // de muur zakt minstens 1 level. 
			alert("muurtje gaat down, muurtje gaat down");
			return (inc-i)/5 * Math.round(Ratio[3] * max);//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
			}
		}
		return 0;
		break;
	/*case "bouwtijd"
		var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
		var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
		var boogoff = settings['Offopp'][6] *120;
		var totoff = infoff + cavoff + boogoff;
		var max = settings['Offopp'][8] * 2 / 45;		
		var total = [0,0];
		var wall = [20,10,10];
		var Ratio = [0,0,0,0];
		var n = 0;
		for (var i =0;i<inc;i++) {
			n++;	
			wall[2] = 20 + 50* wall[1];
			var multD = Math.pow(1.037, wall[1]);
			for (var j = 0; j< 3; j++) {
				if (totoff > stacktel[j]) {
				return 7;//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD WORDEN. 
				}
				else if (totoff < stacktel[j]) {
					Ratio[j] = Math.pow(totoff/stacktel[j], 1.5);
				}
			}
			if(totoff ==0) {totoff=1;}
			Ratio[3] = (infoff * Ratio[0] + cavoff * Ratio[1] + boogoff * Ratio[2])/totoff;
			if (n ==1) { var Rationis = Ratio[3] * stacktel[0];} 
			stacktel[0] = stacktel[0] * Ratio[3];
			stacktel[1] = stacktel[1] * Ratio[3];
			stacktel[2] = stackteltel[2] * Ratio[3];// Dit zou korter moeten kunnen. 
		}
		break;*/
	}
	
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

var cols = 1;
$("table#incomings_table tr:first th").each(function() {
    cols++;
})
if(cols.length < 4) {
    cols = 6;
}
$("table#incomings_table tr:first").before("<tr><th colspan='" + cols + "'><input type='button' id='OS_list' value='OS-Lijst maken'><input type='button' id='stackbeoordeling' value='stack???!'><input type='button' id='ShowAttackID' value='aanval IDs tonen'></th></tr>");
$("th:contains('Doel')").append("X/Continent:<a href=\"#\" class=\"xsort\" id=\"xasc\">(&and;)</a>&nbsp<a href=\"#\" class=\"xsort\" id=\"xdesc\">(&or;)</a>Y:<a href=\"#\" class=\"ysort\" id=\"yasc\">(&and;)</a>&nbsp<a href=\"#\" class=\"ysort\" id=\"ydesc\">(&or;)</a>");
$("th:contains('Herkomst')").append("X/Continent:<a href=\"#\" class=\"xhsort\" id=\"xhasc\">(&and;)</a>&nbsp<a href=\"#\" class=\"xhsort\" id=\"xhdesc\">(&or;)</a>Y:<a href=\"#\" class=\"yhsort\" id=\"yhasc\">(&and;)</a>&nbsp<a href=\"#\" class=\"yhsort\" id=\"yhdesc\">(&or;)</a>");
$("th:contains('Speler')").append("<a href=\"#\" class=\"spsort\" id=\"spasc\">(&and;)</a>&nbsp<a href=\"#\" class=\"spsort\" id=\"spdesc\">(&or;)</a>");
$("th:contains('Aankomst in')").append("<a href=\"#\" class=\"aankomstsort\" id=\"aankomstasc\">(&and;)</a>&nbsp<a href=\"#\" class=\"aankomstsort\" id=\"aankomstdesc\">(&or;)</a>");
$("#OS_list").click(function() {
alert("Deffpack Cgrain & Tjeerdo");
var doel = {};
    $("<div id='OS_list_popup' style='position: absolute; top: 100px; left: 300px; z-index: 5; height: auto; width: auto;text-align: left;background-color:#ecd6ad;border:2px solid #7d510f;'><div id='close_popup' style='text-align:right;padding:10px 10px 0px 0px'><a href='' id='close'>Sluiten</a></div><textarea id='OutputArea' style='background-color:white;color:black;margin:10px 50px 50px 50px;width:300px;height:300px;'></textarea></div>").appendTo("body");
    $("#close").click(function() {
        $("#OS_list_popup").hide();
    })
     var world = gd.world.match(/\d+/);
     if (world < 21) {
    $("table#incomings_table tr").each(function(i) {
        if(i<2 || i == $("table#incomings_table tr").length-1) { } else {
            if(!$(this, "td:first-child").text().match("OK")) {
            var temp = $(this).text().match(/\d{3}\|\d{3}/); 
            if(doel[temp]) {
                doel[temp][0] = ++(doel[temp][0]);
            } else {
                doel[temp] = [1];
                if(!doel[temp][1]) {
                    doel[temp].push($(this).html().split("</td>")[3].replace(/<[^>]*>?/g, '')); 
                }
            }
        }
        }})} else {
        $("table#incomings_table tr").each(function(i) {
        if(i<2 || i == $("table#incomings_table tr").length-1) {  } else {
            if(!$(this, "td:first-child").text().match(/OK/i)) {
            var temp = $(this).html().split("</td>")[1].match(/\d{3}\|\d{3}/);
            if(doel[temp]) {
                doel[temp][0] = ++(doel[temp][0]);
            } else {
                doel[temp] = [1];
                if(!doel[temp][1]) {
                    doel[temp].push($(this).html().split("</td>")[4].replace(/<[^>]*>?/g, ''));
                }
            }
        }
        }});
        }
        $("#OutputArea").append("[table][**]Aangevallen dorpen[||]Aantal incomings[||]Aankomsttijd 1e aanval[||]Aantal deff nodig[/**]<br/>");
        
		for(key in doel) {
            switch(true) {
                case (doel[key][0] == 1):
                    doel[key].push(7)
                    break;
                case (doel[key][0] > 1 && doel[key][0] < 4):
                    doel[key].push(8)
                    break;
                case (doel[key][0] > 3 && doel[key][0] < 7):
                    doel[key].push(9)
                    break;
                case (doel[key][0] > 6 && doel[key][0] < 12):
                    doel[key].push(10)
                    break;
                case (doel[key][0] > 11 && doel[key][0] < 20):
                    doel[key].push(11)
                    break;
                case (doel[key][0] > 19 && doel[key][0] < 23):
                    doel[key].push(12)
                    break;
                case (doel[key][0] > 22 && doel[key][0] < 32):
                    doel[key].push(13)
                    break;
                case (doel[key][0] > 31 && doel[key][0] < 37):
                    doel[key].push(14)
                    break;
                case (doel[key][0] > 36 && doel[key][0] < 41):
                    doel[key].push(15)
                    break;
                case (doel[key][0] > 40 && doel[key][0] < 49):
                    doel[key].push(16)
                    break;
                case (doel[key][0] > 48 && doel[key][0] < 56):
                    doel[key].push(17)
                    break;
                default:
                    alert(doel[key] + "krijgt meer dan 55 aanvallen\n Om precies te zijn:" + doel[key][0] + "aanvallen");
            }
            $("#OutputArea").append("[*][coord]" + key + "[/coord][|]" + doel[key][0] + "[|]" + $.trim(doel[key][1]) + "[|]" + $.trim(doel[key][2]) +"[/*]" + "<br/>");
        }
        $("#OutputArea").append("[/table]");
});

// einde deel popup/OS-lijst maken
//voor de incomings een kolom IDs maken na het klikken op de button:
$("#stackbeoordeling").click(function() { 
//Dit moet proper. eerst sorteren op doeldorp, enz. 
xsort("xasc");
//for each dorp in list: tel de incs, vraag de stack op (uit LS, uit ajax? ) en bereken/haal de moraal op. Niet zo moeilijk wss.
/*
Uitwerking:
-Zoeken tot hij somlijn vindt. 
- Inc's ophalen uit somlijn. 
- dorp uit bevel erboven opzoeken. ($(this).parent.parent.enz.before.find("td:eq(xx)");
- stack ophalen doormiddel van LS (ajax zal wel niet in orde zijn :S). 
- moraal uitrekenen als het niet in LS staat dmv ajax of moraal gewoon negeren (later toevoegen!). 
- stackinc met gegevens uitvoeren. 
- Output in somlijn: x incs - y extra dorpen def nodig. (igv 0 extra def: groene tekst met: gestackt!)
-Doorzoeken tot einde tabel. 
*/
//var stackalledorpen = JSON.parse(localstorage["CTstack"]);
var rijen = $(".optel");
rijen.each(function(index) {
var inkomende = $(this).text();
alert(inkomende);
var dorp = $(this).prev().html().match(/\((\d+)\|(\d+)\)/);
alert(dorp);
//var naamLS = dorp[1] + "|" + dorp[2];
//var stackie (zie onder waarom niet gewoon stack, we veranderen dat wss eerder! = stackalledorpen[naamLS];
// if (stackie == 'undefined') { output = in RODE LETTERS!: stack onbekend. break;
var stack = stackinc(inkomende, [7000,7000,0,7000, 0, 0, 0, 0,0,0,0],100);
$(this).text(inkomende + " incs --" + stack + " def nodig.!!!");
}); 
var stack = stackinc(7, [7000,7000,0,7000, 0, 0, 0, 0,0,0,0],100);
alert(stack);
}); 
$("#ShowAttackID").click(function(){
$("#incomings_table th:contains('Bevel')").before('<th width="120">IDs&nbsp<a href="#" class="IDsort" id="IDasc">(&and;)</a>&nbsp<a href="#" class="IDsort" id="IDdesc">(&or;)</a></th>'); 
//hieronder IDs voor de rijen zetten:
$("tr[class*=\"row_\"]").each(function(i){
    
	alert("waarschuwing!");
    $(this).children(":first").before("<td>" + $(this).find("input:first").attr("name").match(/\d+/) + "</td>");
    
})
// Hieronder aanval-IDs sorteren. zowel ascending als descending
$('.IDsort').click(function(e) {
    var sortDir = $(this).attr("id");
                function j(a) {
                        var c = a.cells[0].textContent;
                        //alert(c);
                        var u = 0;
                        u += parseInt(c) || 0;
                        return u
                    }
                    void(function () {
                        s = $("tr[class*=\"row_\"]").sort(function (a, b) {
                            if(sortDir=='IDasc') {
                                return j(a) - j(b)
                            } else {
                                return j(b) - j(a)
                            }
                        });
                        for (i = 0; i < $("tr[class*=\"row_\"]").length; i++) {
                                $('#incomings_table tr:last').before(s[i])
                        }
                    })();
	});

})	
function xsort(sortDir){
				function j(a) {
                        var temp = $(a).text().match(/(\d{3})\|(\d{3})/);
						if (temp != null) {
							var tempx = temp[1];
							var tempy = temp[2];
							var c = tempx + "" + tempy;
							//alert(c);
							var u = 0;
							u += parseInt(c) || 0;
						}
						else {
							alert("Hoppa Fa2 stijl!");
							var u = 0;
						}
                        return u
                    }
                    void(function () {
                        s = $("tr[class*=\"nowrap\"]").sort(function (a, b) {
                            //var diff = j(a) - j(b);
							if(sortDir=='xasc') {
								var diff = j(a) - j(b);
								//alert(diff);
                                return diff
                            } else {
								//alert(j(b) - j(a));
                                return j(b) - j(a)
                            }
                        });
                        
						for (i = 0; i < $("tr[class*=\"nowrap\"]").length; i++) {

								$('#incomings_table tr:last').before(s[i])
                        }
                    })();
					
					var amountOfVillages = 0;
					var current = "";
					var targets = [];
					var amount = 1;
					$("tr[class*=\"optel\"]").each(function() {
					$(this).remove();
					});
					$("tr[class*=\"row_\"]").each(function (index, value) {
						var coordsnext = "";
						if  (index !== ($("tr[class*=\"row_\"]").length -1)) {
							var next = $(this).next();
							var coordsnext= j($(next));
						}
						var coords = "";
						coords = j($(this));
						if (coords == coordsnext) {
							amount++;
						}
						//alert(coords);
						//alert(coordsnext);
						if (coords != coordsnext|| index == $("tr[class*=\"row_\"]").length -1 ) {
							if (coordsnext != "" || index == $("tr[class*=\"row_\"]").length -1 ) {
								$(this).after("<tr class='optel'><td align=right colspan=6>" + amount + "&nbsp;</td></tr>");
								amount = 1;
							}
						}
					});




}
$('.xsort').click(function(e) {// Deze functie moet blijven! desnoods onzichtbaar, desnoods als gewone functie, maar Stackbeoordelaar moet het kunnen aanroepen!
    alert("Er gaat hier iets goed fout!");
	var sortDir = $(this).attr("id");
	xsort(sortDir);
	});	
$('.ysort').click(function(e) {
    var sortDir = $(this).attr("id");
                function j(a) {
                        var temp = $(a).text().match(/(\d{3})\|(\d{3})/);
                        var tempx = temp[1];
						var tempy = temp[2];
						var c = tempy + "" + tempx;
						//alert(c);
                        var u = 0;
                        u += parseInt(c) || 0;
                        return u
                    }
                    void(function () {
                        s = $("tr[class*=\"nowrap\"]").sort(function (a, b) {
                            if(sortDir=='yasc') {
                                return j(a) - j(b)
                            } else {
                                return j(b) - j(a)
                            }
                        });
                        for (i = 0; i < $("tr[class*=\"row_\"]").length; i++) {
                                $('#incomings_table tr:last').before(s[i])
                        }
						
                    })();
					$("tr[class*=\"optel\"]").each(function() {
					$(this).remove();
					});
					var amountOfVillages = 0;
					var current = "";
					var targets = [];
					var amount = 1;
					$("tr[class*=\"row_\"]").each(function (index, value) {
						var coordsnext = "";
						if  (index !== ($("tr[class*=\"row_\"]").length -1)) {
							var next = $(this).next();
							var coordsnext= j($(next));
						}
						var coords = "";
						
						coords = j($(this));
						if (coords == coordsnext) {
							amount++;
						}
						if (coords != coordsnext|| index == $("tr[class*=\"row_\"]").length ) {
							$(this).after("<tr class='optel'><td align=right colspan=6>" + amount + "&nbsp;</td></tr>");
							amount = 1;
						}
					});
	});	
$('.xhsort').click(function(e) {
    var sortDir = $(this).attr("id");
                function j(a) {
                        var temp = $(a).text().match(/(\d{3})\|(\d{3})\g/);
                        var tempx = temp[3];
						var tempy = temp[4];
						var c = tempx + "" + tempy;
						//alert(c);
                        var u = 0;
                        u += parseInt(c) || 0;
                        return u
                    }
                    void(function () {
                        s = $("tr[class*=\"row_\"]").sort(function (a, b) {
                            if(sortDir=='xhasc') {
                                return j(a) - j(b)
                            } else {
                                return j(b) - j(a)
                            }
                        });
                        for (i = 0; i < $("tr[class*=\"row_\"]").length; i++) {
                                $('#incomings_table tr:last').before(s[i])
                        }
                    })();
					$("tr[class*=\"optel\"]").each(function() {
					$(this).remove();
					});
					var amountOfVillages = 0;
					var current = "";
					var targets = [];
					var amount = 1;
					$("tr[class*=\"row_\"]").each(function (index, value) {
						var coordsnext = "";
						if  (index !== ($("tr[class*=\"row_\"]").length -1)) {
							var next = $(this).next();
							var coordsnext= j($(next));
						}
						var coords = "";
						
						coords = j($(this));
						if (coords == coordsnext) {
							amount++;
						}
						if (coords != coordsnext|| index == $("tr[class*=\"row_\"]").length ) {
							$(this).after("<tr class='optel'><td align=right colspan=6>" + amount + "&nbsp;</td></tr>");
							amount = 1;
						}
					});
	});
$('.yhsort').click(function(e) {
    var sortDir = $(this).attr("id");
                function j(a) {
                        var temp = $(a).text().match(/(\d{3})\|(\d{3})\g/);
                        var tempx = temp[3];
						var tempy = temp[4];
						var c = tempy + "" + tempx;
						//alert(c);
                        var u = 0;
                        u += parseInt(c) || 0;
                        return u
                    }
                    void(function () {
                        s = $("tr[class*=\"row_\"]").sort(function (a, b) {
                            if(sortDir=='yhasc') {
                                return j(a) - j(b)
                            } else {
                                return j(b) - j(a)
                            }
                        });
                        for (i = 0; i < $("tr[class*=\"row_\"]").length; i++) {
                                $('#incomings_table tr:last').before(s[i])
                        }
                    })();
					var amountOfVillages = 0;
					var current = "";
					var targets = [];
					var amount = 1;
					$("tr[class*=\"optel\"]").each(function() {
					$(this).remove();
					});
					$("tr[class*=\"row_\"]").each(function (index, value) {
						var coordsnext = "";
						if  (index !== ($("tr[class*=\"row_\"]").length -1)) {
							var next = $(this).next();
							var coordsnext= j($(next));
						}
						var coords = "";
						
						coords = j($(this));
						if (coords == coordsnext) {
							amount++;
						}
						if (coords != coordsnext|| index == $("tr[class*=\"row_\"]").length ) {
							$(this).after("<tr class='optel'><td align=right colspan=6>" + amount + "&nbsp;</td></tr>");
							amount = 1;
						}
					});
});
$('.spsort').click(function(e) {	
		 var sortDir = $(this).attr("id");
                function j(a) {
                        var c = $(a).find("a[href*='screen=info_player']").text();
                        alert(c);
                        //var u = 0;
                        //u += parseInt(c) || 0;
                        return c
                    }
                    void(function () {
                        s = $("tr[class*=\"row_\"]").sort(function (a, b) {
                            if(sortDir=='spasc') {
                                return j(a) - j(b)
                            } else {
                                return j(b) - j(a)
                            }
                        });
                        for (i = 0; i < $("tr[class*=\"row_\"]").length; i++) {
                                $('#incomings_table tr:last').before(s[i])
                        }
                    })();
					var amountOfVillages = 0;
					var current = "";
					var targets = [];
					var amount = 1;
					$("tr[class*=\"optel\"]").each(function() {
					$(this).remove();
					});
					$("tr[class*=\"row_\"]").each(function (index, value) {
						var coordsnext = "";
						if  (index !== ($("tr[class*=\"row_\"]").length -1)) {
							var next = $(this).next();
							var coordsnext= j($(next));
						}
						var coords = "";
						
						coords = j($(this));
						if (coords == coordsnext) {
							amount++;
						}
						if (coords != coordsnext|| index == $("tr[class*=\"row_\"]").length ) {
							$(this).after("<tr class='optel'><td align=right colspan=6>" + amount + "&nbsp;</td></tr>");
							amount = 1;
						}
					});
	});
$('.aankomstsort').click(function(e) {	
		 var sortDir = $(this).attr("id");
                function j(a) {
                        var c = $(a).text().match(/(\d+):(\d+):(\d+)\g/);
                        //alert(c);
						var u = 0;
                        u += parseInt(c[5])*60*60 + parseInt(c[6])*60 + parseInt(c[7]) || 0;
						alert(u);
                        return u
                    }
                    void(function () {
					//alert("ik wil aandacht!");
                        s = $("tr[class*=\"row_\"]").sort(function (a, b) {
                            if(sortDir=='aankomstasc') {
                                //alert("goed zo, dat is aandacht!");
								alert(j(a)-j(b));
								return j(a) - j(b)
                            } else {
                                return j(b) - j(a)
                            }
                        });
                        for (i = 0; i < $("tr[class*=\"row_\"]").length; i++) {
                                $('#incomings_table tr:last').before(s[i])
                        }
						$("tr[class*=\"optel\"]").each(function() {
						$(this).remove();
						});
                    })();
					
	});
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
	} // einde deel voor de incomings pagina
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
else if (game_data.mode == "units") {
//OPSLAAN ALS: LIJST MET OFF in dorp LIJST met dorpen zonder stack( minder dan 0.95) 
//LIJST met 1 dorp stack (<1.95) ENZ tot 7 dorpen stack. daarna totale verdedigingskracht opslaan tegen clear ingevoerd. 





}	
});