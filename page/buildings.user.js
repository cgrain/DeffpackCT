else if (location.href.indexOf('mode=buildings') > -1) {
	var rows = $("tr" , "#buildings_table");
	var header = $("tr:contains('Bouwopdrachten')", "#buildings_table");
	var trheader = $(header).find("th");
	var indexmuur = 0;
	var muurtje = JSON.parse(localStorage["CTmuur"]);
	if (muurtje === undefined) { stackie = {};} 
	trheader.each(function(index, value) {//Welke kolom is die van de muur?
		if (/wall/.test($(value).html())) {
			indexmuur = index;
		}
	});
	rows.each(function() {
			var coords = $(this).html().match(/\d+\|\d+/);
			var tds = $(this).find("td");
			var muurlevel = $(tds[indexmuur]).text();
			muurtje[coords] = muurlevel;
	});
	localStorage["CTmuur"] = JSON.stringify(muurtje);
}