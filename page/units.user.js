else if (game_data.mode == "units") {
	$("#units_table").before("<table style='width: 100%'><tr><th><input type='button' id='AllStacks' value='Alle stacks opslaan'><input type='button' id='AttackedVillages' value='aangevallen stacks opslaan'></th></tr></table>");
// Stack opslaan? Gaat veel tijd kosten, om ze allemaal langs te gaan. Hoe dit aan te pakken? Idee: Enkel dorpen onder aanval te doen, tenzij er op een knop gedrukt wordt. Op dat moment wordt alles ingeladen. Werkt natuurlijk enkel alleen bij 'alle' en bij 'verdediging'. 
	if (location.href.indexOf('type=complete') > -1 || location.href.indexOf('type=support_detail') > -1 || location.href.indexOf('type=there') > -1 || location.href.indexOf('type') == -1) {
		$("#AllStacks").click(function(){
			var CT_Stack = {};
			$("#units_table tr:contains('in het dorp')").each(function(){
				var temp = /(\d{1,3}\|\d{1,3})/.exec($(this).prev().text());
				var Stack_units = $(this).html().match(/(\d+)\</g);
				if($("#units_table").find("img[src*='unit_militia.png']").length > 0) {
					Stack_units.pop(); //zonder dit length = 11 (door burgerwacht) in w26, bij incomingsoverzicht daarop controleren, voor boog, ridder enzo
					//debug(CT_Stack.length);
				}
				var Stack_units2  = [];
				$.each(Stack_units, function(i) {
				Stack_units2[i] = Stack_units[i].match(/\d+/);
				
				});
				CT_Stack[temp[1]] = Stack_units;
			});
			localStorage["CTstack"] = JSON.stringify(CT_Stack);
		});
		$("#AttackedVillages").click(function(){
			var rows = $("tr:contains('in het dorp')", "#units_table");
			//rows.css( "color", "red" );
			//localStorage["CTstack"] = "{}";
			var stackie = JSON.parse(localStorage["CTstack"]);
			if (stackie === undefined) { stackie = {};} // ZOU JIJ DIT WILLEN OPLOSSEN? VOOR 1e keer mensen weet je wel, dan wordt dat gewoon veel makkelijker :)
			//debug("problemen? niet hier.");
			rows.each(function(i) {
			if (location.href.indexOf('type=complete') > -1 || location.href.indexOf('type') == -1) { 
			var dorpscoord = $(this).prev().html(); 
			} 
			else { 
			var dorpscoord = $(this).html(); 
			}
			//debug(dorpscoord);
			//debug("hoi pipeloi!");
			if (/command\/attack\.png\?901ab/.test(dorpscoord)) {
			//debug("onder aanval!");
			var coords = dorpscoord.match(/\d+\|\d+/);
			//debug(coords);
			var dorpstacktext = $(this).html().match(/((\d+))\</g);
			//debug(dorpstacktext);
			if (world_config.hasArchers) { 
				var dorpstack = [dorpstacktext[0].match(/\d+/)[0],dorpstacktext[1].match(/\d+/)[0],dorpstacktext[2].match(/\d+/)[0],dorpstacktext[3].match(/\d+/)[0],dorpstacktext[4].match(/\d+/)[0],dorpstacktext[5].match(/\d+/)[0],dorpstacktext[6].match(/\d+/)[0],dorpstacktext[7].match(/\d+/)[0],dorpstacktext[8].match(/\d+/)[0],dorpstacktext[9].match(/\d+/)[0],dorpstacktext[10].match(/\d+/)[0]];// nog iets verzinnen voor ridders!! 
			}else {
				var dorpstack = [dorpstacktext[0].match(/\d+/)[0],dorpstacktext[1].match(/\d+/)[0],dorpstacktext[2].match(/\d+/)[0],dorpstacktext[3].match(/\d+/)[0],dorpstacktext[4].match(/\d+/)[0],dorpstacktext[5].match(/\d+/)[0],dorpstacktext[6].match(/\d+/)[0],dorpstacktext[7].match(/\d+/)[0],dorpstacktext[8].match(/\d+/)[0]]; 
			}
			stackie[coords] = dorpstack;
			//debug(stackie[coords]);
			}
			
			
			});localStorage["CTstack"] = JSON.stringify(stackie);
			//debug(localStorage["CTstack"]);
		});
	}
} // einde deel voor troepenoverzicht