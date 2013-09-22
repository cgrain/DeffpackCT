else if (location.href.indexOf('mode=buildings') > -1) {
	//debug("!");
	var rows = $("tr" , "#buildings_table");
	var header = $("tr:contains('Bouwopdrachten')", "#buildings_table");
	var trheader = $(header).find("th");
	var indexmuur = 0;
	var indexkerk = 0;
	//debug("FOUTFOUTFOUT!");
	if (localStorage['CTmuur'] === undefined) {
	localStorage['CTmuur'] ="{}";
	localStorage['CTkerk'] = "[]";
	}
	if (localStorage['CTkerk'] === undefined){
	localStorage['CTkerk'] = "[]";
	}
	
	var muurtje = JSON.parse(localStorage["CTmuur"]);
	var kerkje = JSON.parse(localStorage["CTkerk"]);kerkje = [];
	//debug("!!?");
	if (muurtje === undefined) { muurtje = {};} 
	if (kerkje === undefined) { kerkje = [];} 
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
			//debug("JA!");
			var muurlevel = $(tds[indexmuur]).text();
			
			muurtje[coords] = muurlevel;
			var kerklevel  = $(tds[indexkerk-1]).text();
			var eerstekerk = $(tds[indexkerk]).text();
			if (eerstekerk == 1) {
				kerkje.push(coords);
			}
			else if (kerklevel != 0) {
				//debug("HIER FOUT!");
				kerkje.push(coords);
				//debug("Zie je?");
			}
			
	});
	
	localStorage["CTmuur"] = JSON.stringify(muurtje);
	debug(localStorage["CTmuur"]);
	localStorage["CTkerk"] = JSON.stringify(kerkje);
}