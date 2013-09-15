else if (location.href.indexOf('screen=info_command') > -1) {
    var att_id = JSON.parse(localStorage['CT_IncomingsId']);
    //debug(JSON.stringify(att_id));
    $("#edit").after("<a href='javascript:void(0);' style='text-align:right;margin-left:5px' id='NextIncoming'>Volgende bevel</a>")
			if($("input[id*='editInput']").val() == "" || $("input[id*='editInput']").val().match(/Aanval/i)) {
			    //debug("Tja");
			var infotable = $("#content_value").find("table:eq(0)");
			var herkomstdorp = $(infotable).find("tr:contains('Herkomst')").next().find("td:eq(1)");
			var attacker = $(infotable).find("tr:contains('Herkomst') td").last().text();
			var doeldorp = $(infotable).find("tr:contains('Doel')").next().find("td:eq(1)");
			var herkomstcoord = herkomstdorp.text().match(/\d+\|\d+/).toString().split("|");
			var doelcoord = doeldorp.text().match(/\d+\|\d+/).toString().split("|");
			var fields = Math.sqrt(Math.pow(parseInt(doelcoord[0])-parseInt(herkomstcoord[0]),2)+Math.pow(parseInt(doelcoord[1])-parseInt(herkomstcoord[1]),2));
			var aankomsttijd = $(infotable).find("tr:contains('Aankomst:')").find("td:eq(1)").text();
			if($(this).find("input[id*='editInput']").val().match(/^2bt/i)) {
			    var aankomstin = $("input[id*='editInput']").val().match(/\d+\:\d+\:\d+/).toString().split(":");
			} else {
			    var aankomstin = $(infotable).find("tr:contains('Aankomst in:')").find("td:eq(1)").text().split(":");
			}
			var looptijden = [];
			$.each(CTPack_Units, function(k,v){
				if(v != null) {
					var looptijd = getlooptijd(herkomstcoord[0], herkomstcoord[1], doelcoord[0], doelcoord[1], v, aankomsttijd);
					//debug(looptijd.tijdsduur);
					if(aankomstin[0] == looptijd.uurtijdsduur) {
					    if(aankomstin[1] < looptijd.minuuttijdsduur) {
						looptijden.push(v +" - " + k);
					    } else if(aankomstin[1] == looptijd.minuuttijdsduur) {
						if(aankomstin[2] <= looptijd.secondentijdsduur) {
						    looptijden.push(v +" - " + k);
						}
					    }
					} else if(aankomstin[0] < looptijd.uurtijdsduur) {
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
			$("input[id*='editInput']").val(looptijden[0].split(" - ")[1] + " (" + herkomstdorp.text().match(/\d+\|\d+/).toString() + ") " + attacker + " F" + fields.toFixed(1)).next("input").click();
			}
		$("#NextIncoming").click(function() {
		    var id = $.trim(location.href.match(/id=(\d+)/)[1]);
		    var ID_index = $.inArray(id, att_id);
		    ID_index = ID_index + 1;
		    if(ID_index < att_id.length) {
		    location.href=game_data.link_base_pure+'info_command&id='+att_id[ID_index];
		    } else {
			location.href=game_data.link_base_pure+'overview_villages&mode=incomings&subtype=attacks'
		    }
		    })
		} // einde deel bevel overzicht (incoming);