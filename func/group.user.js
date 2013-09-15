function ArrivalSort(sortDir) {
                function j(a) {
                        var c = $(a).find(".timer").text().match(/(\d+):(\d+):(\d+)/);
						var u = 0;
                        u += parseInt(c[0])*60*60 + parseInt(c[1])*60 + parseInt(c[2]) || 0;
                        return u
                    }
                    void(function () {
					//debug("ik wil aandacht!");
                        s = $("tr[class*=\"row_\"]").sort(function (a, b) {
                            if(sortDir=='asc') {
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
}
function mark_last() {
    ArrivalSort('asc');
    var temp = [];
	$(".nowrap:has(input[id*='editInput'])").each(function(){
	    var AttackedVillage = $.trim($(this).find("a[href*='screen=overview']").html());
	    if($.type(AttackedVillage) === "string") {
		if($.inArray(AttackedVillage, temp) == -1) {
		    temp.push(AttackedVillage);
		}
	    }
	})
	$.each(temp, function(k,v){
	    var tempVal = $(".nowrap").find("a[href*='screen=overview']:contains('"+v+"')").last().closest("tr").find("input[id*='editInput']").val();
	    if(tempVal.match(" LAATSTE") === null) {
	    $(".nowrap").find("a[href*='screen=overview']:contains('"+v+"')").last().closest("tr").find("input[id*='editInput']").val(tempVal + " LAATSTE").next("input").click();
	    }
	})
}
function xsort(sortDir){
				function j(a) {
                        var link = $(a).find("a[href$='overview']")
						var temp = link.text().match(/(\d{3})\|(\d{3})/);
						if (temp != null) {
							var tempx = temp[1];
							var tempy = temp[2];
							var c = tempx + "" + tempy;
							//debug(c);
							var u = 0;
							u += parseInt(c) || 0;
						}
						else {
							debug("Hoppa Fa2 stijl!");
							var u = 0;
						}
                        return u
                    }
                    void(function () {
                        s = $("tr[class*=\"nowrap\"]").sort(function (a, b) {
                            //var diff = j(a) - j(b);
							if(sortDir=='xasc') {
								var diff = j(a) - j(b);
								//debug(diff);
                                return diff
                            } else {
								//debug(j(b) - j(a));
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
						//debug(coords);
						//debug(coordsnext);
						if (coords != coordsnext|| index == $("tr[class*=\"row_\"]").length -1 ) {
							if (coordsnext != "" || index == $("tr[class*=\"row_\"]").length -1 ) {
								$(this).after("<tr class='optel'><td align=right colspan=6>" + amount + "&nbsp;</td></tr>");
								amount = 1;
							}
						}
					});
}
function createEmptyRow(cells) {
	var row = $("<tr><td colspan='"+cells+"'></td></tr>").css({'background-color':'inherit', 'height': 20});
	return row[0];
}
function GroupAttacks() {
    var last = $("#incomings_table tr").last();
	var incomings = {};
	var CT_stack = JSON.parse(localStorage["CTstack"])
	
	$('#incomings_table .nowrap').each(function(){
		var coords = /(\d{1,3}\|\d{1,3})/.exec($(this).text());
		if(!incomings[coords[1]]) {
			incomings[coords[1]] = [];
		}
		incomings[coords[1]].push($(this))
	});
	for(data in incomings) {
		var targets = incomings[data]
		$.each(targets, function(i){
			$(this).remove();
			$('#incomings_table tr:last').before($(this));
			$(this).attr("class", "nowrap row_"+(i % 2 ? 'b' : 'a'))
			$(this).attr("data-coords", data)
		})
		// hier eerst nog stack omzetten naar plaatjes en getallen ;) /W26 werkt het goed, nu nog voor lengtes van 12(boog,ridder),11(boog) en 9
		if(CT_stack[data].length == 10) {
			dorpstack = ['<img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png" title="Speervechter" alt=""/>'+parseInt(CT_stack[data][0]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png" title="Zwaardvechter" alt=""/>'+parseInt(CT_stack[data][1]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png" title="Bijlstrijder" alt=""/>'+parseInt(CT_stack[data][2]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png" title="Verkenner" alt=""/>'+parseInt(CT_stack[data][3]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png" title="Lichte calaverie" alt=""/>'+parseInt(CT_stack[data][4]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png" title="Zware calaverie" alt=""/>'+parseInt(CT_stack[data][5]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png" title="Ram" alt=""/>'+parseInt(CT_stack[data][6]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_catapult.png" title="Katapult" alt=""/>'+parseInt(CT_stack[data][7]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_knight.png" title="Ridder" alt=""/>'+parseInt(CT_stack[data][8]),'<img src="http://cdn2.tribalwars.net/graphic/unit/unit_snob.png" title="Edelman" alt=""/>'+parseInt(CT_stack[data][9])]
		}
		//alert(JSON.stringify(CTPack_Units));
		$('#incomings_table tr:last').before($("<tr style='height:20px;font-weight:bold;'><th colspan='"+$("#incomings_table tr:first-child th").length+"'><span data-count='2'>#"+targets.length+"</span><select id='CT_Tags'> <option>OK</option><option>DODGE</option><option>ONTWIJK</option><option>BIJSTACKEN</option><option>GEVRAAGT</option><option>__dubbel</option><option>__fake</option></select><input type='button' class='CT_Mark_Attacks' value='Markeren' data-coords='"+data+"'>Stack: "+dorpstack+"</th></tr>")) 
		$('#incomings_table tr:last').before($(createEmptyRow($("#incomings_table tr:first-child th").length)));
	}
	$(".CT_Mark_Attacks").bind('click', function() {
		var temp = $(this)
		$("#incomings_table .nowrap[data-coords='"+$(this).attr("data-coords")+"']").each(function(){
			$(this).find("input[id*='editInput']").val($(temp).closest("th").find("#CT_Tags").val() + " " +$(this).find("input[id*='editInput']").val()).next("input").click();
		})
	});
}