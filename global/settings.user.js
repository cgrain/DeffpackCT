var settings = {};
if (localStorage['CTPack-Settings'] === undefined) { 
		settings['Stackbeoordeling'] = "muur";
		settings['Offopp']= [0,0,7000,0,0,3000,0,0,300,0,0,0];
		settings['mobdef']= [7000,0,0,7000,0,0,0,1500,5,0,0,0];
		localStorage['CTPack-Settings']= JSON.stringify(settings);
}
settings = JSON.parse(localStorage['CTPack-Settings']);
$('#linkContainer').append('<a href="#" id="deffsettings"> - CT Deff Pack</a>');

$("#deffsettings").click(function() {
    var a = document.createElement("div");
	a.id = "Deffsettings";
	a.style.cssText = "background-color:#ecd6ad;border:2px solid #7d510f;z-index:500;top:130px;left:40%;position:absolute;padding-top:7px;padding-left:7px;width:400px;border-radius:7px;box-shadow:0 0 50px 15px #000000;";
	document.body.appendChild(a);
	var menu =  '<h2 style="text-align: center;">settings Deff-Pack</h2><table><tr><td>';
	menu += 'Stack:<select><option name="muur">De muur zal niet zakken, daar dat het begin van het eind is.</option><option name="10procent">Er gaat hooguit 10% per keer dood.</option><option  name="percentage">het percentage wat per keer doodgaat is:</option></select></td></tr>';
	if (settings['Stackbeoordeling'] == "percentage") {
	menu += "<tr><td>percentage:        <input id='percentagegetal' style='width:25px'></td></tr>";//HOE DIT TE VERANDEREN, wordt namelijk enkel geladen bij het opstarten. :s. 
	}
	menu += '<tr><td>Normale Clear:</td></tr><tr><td><table id="Offopp" class="vis"><tr><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png?48b3b" title="Speervechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png?b389d" title="Zwaardvechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png?51d94" title="Bijlstrijder" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_archer.png?db2c3" title="Boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png?eb866" title="Verkenner" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png?2d86d" title="Lichte cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_marcher.png?ad3be" title="Bereden boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png?a83c9" title="Zware cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png?2003e" title="Ram" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_catapult.png?5659c" title="Katapult" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_snob.png?0019c" title="Edelman" alt="" class="" /></th></tr><tr><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td "><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td></tr></td></tr></table></td></tr><tr><td>Mobiel! Def-dorp:</td></tr><tr><td><table id="mobdef" class="vis"><tr><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png?48b3b" title="Speervechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png?b389d" title="Zwaardvechter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png?51d94" title="Bijlstrijder" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_archer.png?db2c3" title="Boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png?eb866" title="Verkenner" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png?2d86d" title="Lichte cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_marcher.png?ad3be" title="Bereden boogschutter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png?a83c9" title="Zware cavalerie" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png?2003e" title="Ram" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_catapult.png?5659c" title="Katapult" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_snob.png?0019c" title="Edelman" alt="" class="" /></th></tr><tr><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td "><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td><td><input style="width:25px"></td></tr></td></tr></table>';
	menu += '<tr><td><a id="Deffsluiten" href="javascript:void(0)">sluiten</a></tr></td></table>';
	a.innerHTML = menu;
	$('option[name=' + settings['Stackbeoordeling'] + ']').attr('selected', true);
	$('#percentagegetal').val(settings['Percentage']);
	var definput = $('#mobdef input');
	var offinput = $('#Offopp input');
	definput.attr('value', function(arr){ return settings['mobdef'][arr];});
	offinput.attr('value', function(arr){ return settings['Offopp'][arr];});
	$("#Deffsluiten").click(function(){
		
		settings['Stackbeoordeling'] = $("#Deffsettings select:eq(0) option:selected").attr("name");
		settings['Percentage'] = $('#percentagegetal').val();
		
		//settings['Offopp']= [0,0,7000,0,0,3000,0,0,300,0,0,0];
		settings['Offopp'] = [];
		offinput.each(function(){
			settings['Offopp'].push($(this).val());
		});
		var kritiek = 0;
		var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
		var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
		var boogoff = settings['Offopp'][6] *120;
		var totoff = infoff + cavoff + boogoff; 
		settings['infquota'] = infoff/totoff;
		var cavquota = cavoff/totoff;
		var boogquota = boogoff/totoff;
		var max = settings['Offopp'][8] * 2 / 45;
		var maxratio = 0.5/max;
		var maxratiostuk = maxratio/3;
		// settings['infquota'] * X + cavquota * y + boogquota * Z; 3 Variabelen: Vergelijking is niet op te lossen. Creatief zijn dus.
		// settings['infquota' *X < maxratiostuk
		var x = maxratiostuk/settings['infquota'];
		var y = maxratiostuk/cavquota;
		var z = maxratiostuk/boogquota;
		// X = (att/def) ^1.5 X^(2/3) = (totoff/def(inf))
		settings['definf'] = totoff/Math.pow(x,(2/3));
		settings['cavinf'] = totoff/Math.pow(y,(2/3));
		settings['booginf']= totoff/Math.pow(z,(2/3));
		settings['mobdef']= [];
		definput.each(function(){
			settings['mobdef'].push($(this).val());
		});
		localStorage['CTPack-Settings'] = JSON.stringify(settings);
		$("#Deffsettings").remove();
	}); 
});