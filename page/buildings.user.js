else if (location.href.indexOf('mode=buildings') > -1) {
	var rows = $("tr" , "#buildings_table");
	var header = $("tr:contains('Bouwopdrachten')", "#buildings_table");
	var trheader = $(header).find("th");
	var indexmuur = 0;
	var indexkerk = 0;
	var muurtje = JSON.parse(localStorage["CTmuur"]);
	var kerkje = JSON.parse(localStorage["CTkerk"]);
	if (muurtje === undefined) { muurtje = {};} 
	if (kerkje === undefined) { kerkje = {};} 
	trheader.each(function(index, value) {//Welke kolom is die van de muur?
		if (/wall/.test($(value).html())) {
			indexmuur = index;
		}
		if (/church/.test($(value).html())) {
		indexkerk= index;
		}
	});
	rows.each(function() {
			var coords = $(this).html().match(/\d+\|\d+/);
			var tds = $(this).find("td");
			var muurlevel = $(tds[indexmuur]).text();
			muurtje[coords] = muurlevel;
			var kerklevel  = $(tds[indexkerk]).text();
			var eerstekerk = $(tds[indexkerk+1]).text();
			if (eerstekerk) {
				kerkje.push(coords);
			}
			else if (kerklevel != 0) {
				kerkje.push(coords);
			}
			
			
	});
	localStorage["CTmuur"] = JSON.stringify(muurtje);
	localStorage["CTkerk"] = JSON.stringify(kerkje);
}