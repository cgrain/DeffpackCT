//hier ga ik sorteren, als snippet :)
// het is practischer om veelgebruikte selecteer stukjes algemeen te laten zijn, 
//zodat je sneller én begrijpelijker code schrijft :)

var bevelrow = $("table#incomings_table tr");

$("#XOMLAAG").click(function() { 
	
	var coords = [];
	$(bevelrow).each(function(index) {
		var temp = $(this).text().match(/(\d{3})\|(\d{3})/);
		var tempx = temp[1];
		var tempy = temp[2];
		coords.push(tempx + "" + tempy);
	});
	coords.sort(function(a,b){return a-b});
	alert(coords);
	var newtable = "<table><th>UITZOEKEN!!!!!!!!!!!!!!!!!!!!!!!!!!";
	
	$.each(coords, function(i) {
		var number = coords[i],
		output = [],
		sNumber = number.toString();

		for (var i = 0, len = sNumber.length; i < len; i += 1) {
			output.push(+sNumber.charAt(i));
		}
		var x = output[0] + "" + output[1]+ "" + output[2];
		var y = output[3] + "" + output[4]+ "" + output[5];
		var coordinaat = x + "|" + y;
		var rijen = $("table#incomings_table").find("td:contains('" + coordinaat + "')").parent();
		newtable += rijen.html() + "<tr>"// + STACKBEOORDELING!!!!!!!!!!!
		
	});
	// oude tabel verwijderen
	// exacte kopie, maar dan gesorteerd toevoegen aan pagina. 
	newtable += "LAATSTE RIJEN DIE ERIN VERWERKT ZITTEN, maar geen bevelrijen zijn!!</table>"
	
});
$("#XOMHOOG").click(function() { /**Zelf weten hoe je het noemt natuurlijk **/
	var coords = [];
	$(bevelrow).each(function(index) {
		var temp = $(this).text().match(/(\d{3})\|(\d{3})/);
		var tempx = temp[1];
		var tempy = temp[2];
		coords.push(tempx + "" + tempy);
	});
	coords.sort(function(a,b){return b-a});
	alert(coords);
});
$("#YOMLAAG").click(function() { /**Zelf weten hoe je het noemt natuurlijk **/
	var coords = [];
	$(bevelrow).each(function(index) {
		var temp = $(this).text().match(/(\d{3})\|(\d{3})/);
		var tempx = temp[1];
		var tempy = temp[2];
		coords.push(tempy + "" + tempx);
	});
	coords.sort(function(a,b){return a-b});
	alert(coords);
});
$("#YOMHOOG").click(function() { /**Zelf weten hoe je het noemt natuurlijk **/
	var coords = [];
	$(bevelrow).each(function(index) {
		var temp = $(this).text().match(/(\d{3})\|(\d{3})/);
		var tempx = temp[1];
		var tempy = temp[2];
		coords.push(tempy + "" + tempx);
	});
	coords.sort(function(a,b){return b-a});
	alert(coords);
});