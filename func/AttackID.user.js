function ShowAttackID() {
    if($("#incomings_table:has(th:contains('IDs'))").length == 0) {
	$("#incomings_table th:contains('Bevel')").before('<th width="120">IDs&nbsp<a href="#" class="IDsort" id="IDasc">(&and;)</a>&nbsp<a href="#" class="IDsort" id="IDdesc">(&or;)</a></th>'); 
	//hieronder IDs voor de rijen zetten:
	$("tr[class*=\"row_\"]").each(function(i){
	    $(this).children(":first").before("<td>" + $(this).find("input:first").attr("name").match(/\d+/) + "</td>");
	})
	// Hieronder aanval-IDs sorteren. zowel ascending als descending
	$("#IDasc").click(function(){SortIDs('asc')});
	$("#IDdesc").click(function(){SortIDs('desc')});
    } else {
	$("#incomings_table tr").each(function(){
	    $(this).children(":first").remove();;
	})
    }  
}
function SortIDs(sortDir) {
                function j(a) {
                        var c = a.cells[0].textContent;
                        //debug(c);
                        var u = 0;
                        u += parseInt(c) || 0;
                        return u
                    }
                    void(function () {
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
                    })();
}