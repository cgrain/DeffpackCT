else if(game_data.mode == "call") {
    $('#village_troup_list').before('<table style="width:100%"><tr><th><input type="button" id="CT_CallFilter" value="Filteren"></th></tr></table>');
    $("#CT_CallFilter").click(function(){
	var MaxPopulation = prompt('Minimaal aantal boerderijplaatsen: ', 18000);
	$('#village_troup_list tr:has("td.tooltip")').each(function(){
	    var CountPopulation = 0;
	    if($(this).find('td[data-unit*="archer"]').length > 0) {
		ValSpear = parseInt($(this).find(".tooltip")[0].innerHTML) * population['spear'];
		ValSword = parseInt($(this).find(".tooltip")[1].innerHTML) * population['sword'];
		ValAxe = parseInt($(this).find(".tooltip")[2].innerHTML) * population['axe'];
		ValArcher = parseInt($(this).find(".tooltip")[3].innerHTML) * population['archer'];
		ValSpy = parseInt($(this).find(".tooltip")[4].innerHTML) * population['spy'];
		ValLight = parseInt($(this).find(".tooltip")[5].innerHTML) * population['light'];
		ValMarcher = parseInt($(this).find(".tooltip")[6].innerHTML) * population['marcher'];
		ValHeavy = parseInt($(this).find(".tooltip")[7].innerHTML) * population['heavy'];
		ValRam = parseInt($(this).find(".tooltip")[8].innerHTML) * population['ram'];
		ValCatapult = parseInt($(this).find(".tooltip")[9].innerHTML) * population['catapult'];
		ValKnight = $(this).find(".tooltip")[10] ? parseInt($(this).find(".tooltip")[10].innerHTML) * population['knight'] : 0;
		CountPopulation = ValSpear+ValSword+ValAxe+ValArcher+ValSpy+ValLight+ValMarcher+ValHeavy+ValRam+ValCatapult+ValKnight;
	    } else {
		ValSpear = parseInt($(this).find(".tooltip")[0].innerHTML) * population['spear'];
		ValSword = parseInt($(this).find(".tooltip")[1].innerHTML) * population['sword'];
		ValAxe = parseInt($(this).find(".tooltip")[2].innerHTML) * population['axe'];
		ValSpy = parseInt($(this).find(".tooltip")[3].innerHTML) * population['spy'];
		ValLight = parseInt($(this).find(".tooltip")[4].innerHTML) * population['light'];
		ValHeavy = parseInt($(this).find(".tooltip")[5].innerHTML) * population['heavy'];
		ValRam = parseInt($(this).find(".tooltip")[6].innerHTML) * population['ram'];
		ValCatapult = parseInt($(this).find(".tooltip")[7].innerHTML) * population['catapult'];
		ValKnight = $(this).find(".tooltip")[8] ? parseInt($(this).find(".tooltip")[8].innerHTML) * population['knight'] : 0;
		CountPopulation = ValSpear+ValSword+ValAxe+ValSpy+ValLight+ValHeavy+ValRam+ValCatapult+ValKnight;
	    }
	    if(CountPopulation < MaxPopulation) {
		$(this).remove();
	    }
	})
    })
}