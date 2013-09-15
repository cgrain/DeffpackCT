var win = window.main ? window.main : window,
gd = win.game_data;

var world_data = {};
		var current_page = "";
		    var population = {
            'spear': 1,
	    'sword': 1,
	    'axe': 1,
	    'archer': 1,
            'spy': 2,
	    'light': 4,
	    'marcher': 5,
	    'heavy': 6,
            'ram': 5,
	    'catapult': 8,
            'knight': 10,
	    'snob': 100
        };
		// world config: global game settings
		var world_config = {
			hasMilitia: false,
			nightbonus: {
				active: false,
				from: 0, 
				till: 0
				},
			smithyLevels: true,
			hasChurch: false,
			hasArchers: false,
			hasKnight: false,
			speed: 1,
			unitSpeed: 1,
			farmLimit: 0,
			minFake: 0,
			hasMinFakeLimit: false,
			coins: false,
			maxNobleWalkingTime: 999
		};
		if (localStorage['CTworldconfig'] !== undefined) {
			world_config = JSON.parse(localStorage['CTworldconfig']);
			
		} 
		else {
			// load new world through tw API
			
				function world_config_setter_unit(configBag, unitInfoXml) {
					configBag.hasMilitia = $("config militia", unitInfoXml).length !== 0;
				}
				
				function world_config_setter(configBag, infoXml) {
					configBag.nightbonus = {
						active: $("night active", infoXml).text() === "1",
						from: parseInt($("night start_hour", infoXml).text(), 10),
						till: parseInt($("night end_hour", infoXml).text(), 10)
						};
					configBag.smithyLevels = $("game tech", infoXml).text() === "1" || $("game tech", infoXml).text() === "0";
					configBag.hasChurch = $("game church", infoXml).text() !== "0";
					configBag.hasArchers = $("game archer", infoXml).text() !== "0";
					configBag.hasKnight = $("game knight", infoXml).text() !== "0";
					configBag.speed = parseFloat($("config speed", infoXml).text());
					configBag.unitSpeed = parseFloat($("config unit_speed", infoXml).text());
					configBag.farmLimit = parseInt($("game farm_limit", infoXml).text(), 10);
					configBag.minFake = parseInt($("game fake_limit", infoXml).text(), 10) / 100;
					configBag.hasMinFakeLimit = configBag.minFake > 0;
					configBag.coins = $("snob gold", infoXml).text() === "1";
					configBag.maxNobleWalkingTime = parseInt($("snob max_dist", infoXml).text(), 10) * configBag.speed * configBag.unitSpeed;
				}

				function world_config_getter(world) {
					// world nl: http://nl16.tribalwars.nl/
					// world de: http://de90.die-staemme.de/
					if (typeof world === 'undefined') world = '';
					
					var world_config = {};
					$.ajax({
						url: world + "interface.php?func=get_unit_info",
						async: false,
						success: function(xml) {
							world_config_setter_unit(world_config, xml);
						}
					});
				
					$.ajax({
						url: world + "interface.php?func=get_config",
						async: false,
						success: function(xml) {
							world_config_setter(world_config, xml);
						}
					});
					return world_config;
				}
				
				world_config = world_config_getter();
			localStorage["CTworldconfig"]=JSON.stringify(world_config);
		}
var unitStat = [[10, 15, 45, 20], [25, 50, 15, 40], [40, 10, 5, 10], [15, 50, 40, 5], [0, 2, 1, 2], [130, 30, 40, 30], [120, 40, 30, 50], [150, 200, 80, 180], [2, 20, 50, 20], [100, 100, 50, 100],[150, 250, 400, 150], [30, 100, 50, 100]];
		if(localStorage.getItem("CTPack_Units") === null) {
        var URL_UnitInfo = "http://" + game_data.world + ".tribalwars.nl/interface.php?func=get_unit_info";
        $.ajax({
            url: URL_UnitInfo,
            success: function (UnitResult) {
                var CTPack_Units = {
                    'Speer/Bijl': parseFloat($(UnitResult).find("spear").find("speed").text()),
                    'Zwaard': parseFloat($(UnitResult).find("sword").find("speed").text()),
                    'Boog': parseFloat($(UnitResult).find("archer")) ? parseFloat($(UnitResult).find("archer").find("speed").text()) : null,
                    'Scouts':parseFloat($(UnitResult).find("spy").find("speed").text()),
                    'LC':parseFloat($(UnitResult).find("light").find("speed").text()),
                    'Bereden Boog': parseFloat($(UnitResult).find("marcher")) ? parseFloat($(UnitResult).find("marcher").find("speed").text()) : null,
                    'ZC':parseFloat($(UnitResult).find("heavy").find("speed").text()),
                    'Ram/Kata': parseFloat($(UnitResult).find("ram").find("speed").text()),
                    '!!Edel!!': parseFloat($(UnitResult).find("snob").find("speed").text())
                };
                localStorage.setItem('CTPack_Units', JSON.stringify(CTPack_Units));
            }
        });
        }
        var CTPack_Units = JSON.parse(localStorage.getItem("CTPack_Units"));