if ($("#incomings_table").length>0) {
var CTtagger = "<input type='button' id='CT_tagger' value='Aanvallen taggen'>";
if($("#incomings_table th:contains('Herkomst')").length > 0) { CTtagger = "<input type='button' id='CT_massatagger' value='Aanvallen taggen'>" }
$("#incomings_table").before("<table style='width: 100%'><tr><th><input type='button' id='OS_list' value='OS-Lijst maken'><input type='button' id='stackbeoordeling' value='stackbeoordeling'><input type='button' id='SearchFakes' value='Fakezoeker'>"+CTtagger+"<input type='button' id='FilterDoel' value='Doel Filteren'><input type='button' id='MarkLastAttacks' value='Markeer laatste aanvallen'><input type='button' id='FreezeTimers' value='Timers stoppen'><input type='button' id='ShowAttackID' value='aanvalsid tonen'><input type='button' id='GroupAttacks' value='Groeperen'></th></tr></table>");
$("#OS_list").click(function() {
//debug("Deffpack Cgrain & Tjeerdo");
var doel = {};
    $("<div id='OS_list_popup' style='position: absolute; top: 100px; left: 300px; z-index: 5; height: auto; width: auto;text-align: left;background-color:#ecd6ad;border:2px solid #7d510f;'><div id='close_popup' style='text-align:right;padding:10px 10px 0px 0px'><a href='' id='close'>Sluiten</a></div><textarea id='OutputArea' style='background-color:white;color:black;margin:10px 50px 50px 50px;width:300px;height:300px;'></textarea></div>").appendTo("body");
    $("#close").click(function() {
        $("#OS_list_popup").hide();
    })
	
     var world = gd.world.match(/\d+/);
     if (world < 21) {
    $("table#incomings_table .nowrap").each(function() {
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
        }})} else {
        $("table#incomings_table .nowrap").each(function(i) {
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
        }});
        }
        $("#OutputArea").append("[table][**]nummer[**]Aangevallen dorpen[||]Aantal incomings[||]Aankomsttijd 1e aanval[||]Aantal deff nodig[/**]<br/>");
		var indexlijst = 0;
		debug("voor zover");
		for(key in doel) {
		    indexlijst++;
			if (localStorage['CTstack'] === undefined) {
			alert("nog geen stacks gebruikt?\nJe kunt bij troepen overzicht de stacks laden, dat gebeurd automatisch");
			localStorage['CTstack'] = "{}";
		    }
		    debug("Shitzooi");
			var StackAllVillages = JSON.parse(localStorage["CTstack"]);
		    if (world_config.hasArchers) {
			debug("het gaat fout bij de stack.");
			debug(JSON.stringify(StackAllVillages));
			debug(key)
			var OS_stack = stackincboog(doel[key][0], StackAllVillages[key],100,20);
			debug("kolere");
		    }
		    else {
			var OS_stack = stackincnone(doel[key][0], StackAllVillages[key],100,20); //[7000,7000,0,7000, 0, 0, 0, 0,0]
		    }
		    doel[key].push(OS_stack)
var months = { "Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12 };
		    if($.trim(doel[key][1]).indexOf("vandaag") > -1) {
			var a = $.trim(new Date());
			var CT_Day = a.toString().split(" ")[2];
			var CT_Month = a.toString().split(" ")[1];
			doel[key][1] = $.trim(doel[key][1]).replace("vandaag", "op "+CT_Day+"."+months[CT_Month]+".")
		    } else if($.trim(doel[key][1]).indexOf("morgen") > -1) {
			var a = new Date();
			$.trim(a.setUTCDate(a.getUTCDate() + 1)); //Thu Sep 12 2013 19:13:05 GMT+0200
			var CT_Day = a.toString().split(" ")[2];
			var CT_Month = a.toString().split(" ")[1];
			doel[key][1] = $.trim(doel[key][1]).replace("morgen", "op "+CT_Day+"."+months[CT_Month]+".")
		    }
			debug("Bijna!");
            $("#OutputArea").append("[*]"+ indexlijst + "[*][coord]" + key + "[/coord][|]" + doel[key][0] + "[|]" + $.trim(doel[key][1]) + "[|]" + $.trim(doel[key][2]) +"[/*]" + "<br/>");
        }
        $("#OutputArea").append("[/table]\n\n");
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

if (localStorage['CTstack'] === undefined) {
debug("nog geen stacks gebruikt?\nJe kunt bij troepen overzicht de stacks laden, dat gebeurd automatisch");
localStorage['CTstack'] = "{}";
}
var stackalledorpen = JSON.parse(localStorage["CTstack"]);
var muurtje = JSON.parse(localStorage["CTmuur"]);
var rijen = $(".optel");

rijen.each(function(index) {
var inkomende = $(this).text();
//debug(inkomende);
var dorp = $(this).prev().find("a[href$='overview']").html().match(/\((\d+)\|(\d+)\)/);
//debug(dorp);
var naamLS = dorp[1] + "|" + dorp[2];
var stackie  = stackalledorpen[naamLS];//(zie onder waarom niet gewoon stack, we veranderen dat wss 
var muur = muurtje[naamLS];
if (typeof muur === 'undefined') { muur = 20;}
//debug(stackie);
if (stackie === undefined) {
$(this).text("Stack onbekend");
return true;}
if (world_config.hasArchers) {
var stack = stackincboog(inkomende, stackie,100,muur);
}
else {
var stack = stackincnone(inkomende, stackie,100,muur) //[7000,7000,0,7000, 0, 0, 0, 0,0]
}

$(this).text(inkomende + " incs --" + stack + " def nodig.!!!");
}); 
var stack = stackincboog(7, [7000,7000,0,7000, 0, 0, 0, 0,0,0,0],100);
//debug(stack);
}); 
$("#ShowAttackID").click(function(){
    ShowAttackID()
})	
$("#SearchFakes").click(function() {
    if(confirm("De fakezoeker werkt alleen als je de coordinaten van het herkomstdorp in de  bevelnaam hebt staan\nAls je alle aanvallen hebt getagt dan kun je nu doorgaan")) {
	var attacks = {};
	$(".nowrap:has(input[id*='editInput'])").each(function(){
	    var herkomstdorp = $(this).find("input[id*='editInput']").val().match(/\d{0,3}\|\d{0,3}/) ? $(this).find("input[id*='editInput']").val().match(/\d{0,3}\|\d{0,3}/).toString() : 0;
	    if($.type(herkomstdorp) === "string") {
		if(attacks[herkomstdorp] === undefined) {
		    attacks[herkomstdorp] = '1';
		} else {
		    attacks[herkomstdorp] = ++(attacks[herkomstdorp]);
		}
	    }
	})
	$.each(attacks, function(k,v){
	    if(v > 1) {
		$(".nowrap:has(input[id*='editInput'])").each(function(){
		    if($(this).find("input[id*='editInput']")[0].value.indexOf(k) > -1 && $(this).find("input[id*='editInput']")[0].value.indexOf("??FAKE??") == -1) {
			$(this).find("input[id*='editInput']").val($(this).find("input[id*='editInput']").val() + " ??FAKE??").next("input").click();
		    }
		})
	    }
	})
    }
})
	$("#CT_massatagger").click(function(){
			$("#incomings_table tr.nowrap").each(function(){
				if($(this).find("input[id*='editInput']").val().match(/Aanval/i) || $(this).find("input[id*='editInput']").val().match(/^2bt/i)) {
					var attacker = $(this).find("a[href*='&screen=info_player']").text(),
					own_village = $(this).html().match(/\d+\|\d+/)[0],
					other_village = $(this).find("a[href*='&screen=info_village']").html().match(/\d+\|\d+/),
					f = own_village.toString().split("|"),
					t = other_village.toString().split("|"),
					fields = Math.sqrt(Math.pow(parseInt(f[0])-parseInt(t[0]),2)+Math.pow(parseInt(f[1])-parseInt(t[1]),2));
					var times = [];
					$.each(CTPack_Units, function(k,v){
						if(v != null) {
						times.push(k + " - " + (fields*(v/60)))
						}
					})
					if($(this).find("input[id*='editInput']").val().match(/^2bt/i)) {
					    var remaining_time = $(this).find("input[id*='editInput']").val().match(/\d+\:\d+\:\d+/).toString().split(":");
					} else {
					    var remaining_time = $(this).find(".timer").text().split(":");
					}
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
					$(this).find("input[id*='editInput']").val(possible_times[0].split(" - ")[1] + " (" + other_village + ") " + attacker + " F" + fields.toFixed(1)).next("input").click();
					$(this).children().css("background-color","#00FF00");
				}
			})
        })
	$("#CT_tagger").click(function(){
	    var att_id = [];
	    i = 0;
	    $("#incomings_table .nowrap").each(function() {
		if($(this).find("input[id*='editInput']").val().match(/Aanval/i) || $(this).find("input[id*='editInput']").val().match(/^2bt/i)) {
		    att_id[i] = $.trim($(this).find("input:first").attr("name").match(/\d+/));
		    i++;
		}
	    })
	    localStorage['CT_IncomingsId'] = JSON.stringify(att_id);
	    if(confirm('Er zijn '+att_id.length+' aanvallen die getagd moeten worden.\nWil je naar het eerste bevel gaan?')) { location.href=game_data.link_base_pure+'info_command&id='+att_id[0]} else { debug('Er zijn geen dorpen die getagd kunnen worden.');return};
	})
	$("#FilterDoel").click(function(){ 
    var TargetFilter = $.trim(prompt("Op welke coordinaten wil je filteren: ", "123|456"));
    var xCoord = TargetFilter.split("|")[0];
    var yCoord = TargetFilter.split("|")[1];
    TargetFilter = "["+xCoord.split("")[0]+"]["+xCoord.split("")[1]+"]["+xCoord.split("")[2]+"]\\|["+yCoord.split("")[0]+"]["+yCoord.split("")[1]+"]["+yCoord.split("")[2]+"]";
    var temp = new RegExp(TargetFilter);
    $("#incomings_table .nowrap").each(function(){
        if(temp.test($(this).text()) === false) {
            $(this).remove();
        }
    })
})
$("#MarkLastAttacks").click(function() {
    mark_last();
})
$("#FreezeTimers").click(function(){
    if(timers.length>0) {
	CT_TempTimers=timers;
	timers=[];
	$("#FreezeTimers").val("Timers starten")
	} else {
	    timers=CT_TempTimers;
	    $("#FreezeTimers").val("Timers stoppen");
	} 
})
$("#GroupAttacks").click(function(){
	GroupAttacks();
})

	} // einde deel voor de incomings pagina