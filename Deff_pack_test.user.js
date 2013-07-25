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
	menu += 'Stack:<select><option name="muur">Muur niet zakken!</option><option name="bouwtijd">hij moet langer bouwen dan ik</option></select></td></tr>';
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
		var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][10] * 100 + settings['Offopp'][9] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
		var cavoff = settings['Offopp'][6] * 130 + settings['Offopp'][8] * 150;
		var totoff = infoff + cavoff; 
		settings['infquota'] = infoff/totoff;
		settings['mobdef']= [];
		definput.each(function(){
			settings['mobdef'].push($(this).val());
		});
		localStorage['CTPack-Settings']= JSON.stringify(settings);
		$("#Deffsettings").remove();
	});
});

if (game_data.mode == "incomings") {

var cols = 1;
$("table#incomings_table tr:first th").each(function() {
    cols++;
})
if(cols.length < 4) {
    cols = 6;
}
$("table#incomings_table tr:first").before("<tr><th colspan='" + cols + "'><input type='button' id='OS_list' value='OS-Lijst maken'><input type='button' id='ShowAttackID' value='aanval IDs tonen'></th></tr>");
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

$('.xsort').click(function(e) {
    var sortDir = $(this).attr("id");
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
	
	} // einde deel voor de incomings pagina
	
else if (game_data.mode == "units") {
//OPSLAAN ALS: LIJST MET OFF in dorp LIJST met dorpen zonder stack( minder dan 0.95) 
//LIJST met 1 dorp stack (<1.95) ENZ tot 7 dorpen stack. daarna totale verdedigingskracht opslaan tegen clear ingevoerd. 





}	
});