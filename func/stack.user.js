function stackincboog (inc, stack, moraal, muur) { 
	var stacktel = [];//TODO: Variabelen naar voren halen. 
	var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
		var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
		var boogoff = settings['Offopp'][6] *120;
		var totoff = infoff + cavoff + boogoff;
		//debug(totoff);
		var max = settings['Offopp'][8] * 2 / 45;		
		var total = [0,0];
		var wall = [muur,0.5*muur,0.5*muur];
		var Ratio = [0,0,0,0];
		var n = 0;
		var i =0;
		var j=0;
		//debug("!");
	for (i=0;i<3;i++) {
		stacktel[i] = 0;
		//debug("snap er weer eens niks van!");
		for (j=0;j<11;j++)
		{
			var x = i + 1;
			stacktel[i] = stacktel[i] + stack[j] * unitStat[j][x];
		}
	}
	debug("tjaaa1111111");
	switch (settings['Stackbeoordeling']) {
	case "muur":
		for (i =0;i<inc;i++) {
			n++;
			debug("dit is de " + n + "de aanval"); 
			wall[2] = 20 + 50* wall[1];
			var multD = Math.pow(1.037, wall[1]);
			var stackmuurtel = [0,0,0];
			debug("de verdediging heeft een muurbonus van: " + multD);
			for (j = 0; j< 3; j++) {
				stackmuurtel[j] = stacktel[j] * multD;
				//debug("klaar voor de aanval?");
				//debug(totoff + "--" + stacktel[j]);
				if (totoff > stackmuurtel[j]) {
				//debug("aanvaller wint?"); 
				Ratio[j] = 1; 
				}
				else if (totoff == stackmuurtel[j]) { 
					debug("dit is theoretisch zeer onwaarschijnlijk. "); // Zie hier hetzelfde als hierboven. 
				}
				else if (totoff < stackmuurtel[j]) {
				//debug("verdediging wint"); 
					Ratio[j] = Math.pow(totoff/stacktel[j], 1.5);
				}
			}
			if(totoff ==0) {totoff=1;}
			Ratio[3] = (infoff * Ratio[0] + cavoff * Ratio[1] + boogoff * Ratio[2])/totoff;// Zoveel gaat er van ieder dood. van elke soort troep gaat hetzelfde percentage dood.
			//debug(Ratio[3]);
			
			if (n ==1) { var Rationis = Ratio[3] * stacktel[0];}
			var overleving = 1 - Ratio[3];
			//debug(overleving);
			stacktel[0] = stacktel[0] * overleving;
			stacktel[1] = stacktel[1] * overleving;
			stacktel[2] = stacktel[2] * overleving;// Dit zou korter moeten kunnen. 
			var muurzakt = Ratio[3] * max;
			//debug(muurzakt);
			if (muurzakt >= 0.5) { // de muur zakt minstens 1 level. 
			//debug("muurtje gaat down, muurtje gaat down");
				if (n==1) {// ja, ik weet dat (n) ook werkt. 
					
					return inc * Ratio[3] + 7-(stacktel[0] + stacktel[1] + stacktel[2])/1720000;
//Het grote vraagteken :s  
			
				}
				else {
					return (inc-i + 1)* Ratio[3];//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
				}
			}
		}
		return 0;
		break;
	case "10procent":
		for (i =0;i<inc;i++) {
			n++;
			//debug("dit is de " + n + "de aanval"); 
			wall[2] = 20 + 50* wall[1];
			var multD = Math.pow(1.037, wall[1]);
			var stackmuurtel = [0,0,0]
			//debug("de verdediging heeft een muurbonus van: " + multD);
			for (j = 0; j< 3; j++) {
				stackmuurtel[j] = stacktel[j] * multD;
				//debug("klaar voor de aanval?");
				//debug(totoff + "--" + stacktel[j]);
				if (totoff > stackmuurtel[j]) {
				//debug("aanvaller wint?"); 
				Ratio[j] = 1; 
				}
				else if (totoff == stackmuurtel[j]) { 
					debug("dit is theoretisch zeer onwaarschijnlijk. "); // Zie hier hetzelfde als hierboven. 
				}
				else if (totoff < stackmuurtel[j]) {
				//debug("verdediging wint"); 
					Ratio[j] = Math.pow(totoff/stacktel[j], 1.5);
				}
			}
			if(totoff ==0) {totoff=1;}
			Ratio[3] = (infoff * Ratio[0] + cavoff * Ratio[1] + boogoff * Ratio[2])/totoff;// Zoveel gaat er van ieder dood. van elke soort troep gaat hetzelfde percentage dood.
			//debug(Ratio[3]);
			
			if (n ==1) { var Rationis = Ratio[3] * stacktel[0];}
			var overleving = 1 - Ratio[3];
			//debug(overleving);
			stacktel[0] = stacktel[0] * overleving;
			stacktel[1] = stacktel[1] * overleving;
			stacktel[2] = stacktel[2] * overleving;// Dit zou korter moeten kunnen. 

			if (Ratio >= 0.1) { // de muur zakt minstens 1 level. 
			//debug("muurtje gaat down, muurtje gaat down");
				if (n==1) {// ja, ik weet dat (n) ook werkt. 
					
					return inc * Ratio[3] + 7-(stacktel[0] + stacktel[1] + stacktel[2])/1720000;
//Het grote vraagteken :s  
			
				}
				else {
					return (inc-i + 1)* Ratio[3];//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
				}
			}
		}
		return 0;
		break;
	case "percentage":
		//debug(inc);
		for (i=0;i<inc;i++) {
			debug("Tja");
			n++;
			
			debug("dit is de " + n + "de aanval"); 
			wall[2] = 20 + 50* wall[1];
			var multD = Math.pow(1.037, wall[1]);
			var stackmuurtel = [0,0,0];
			debug("de verdediging heeft een muurbonus van: " + multD);
			for (j = 0; j< 3; j++) {
				stackmuurtel[j] = stacktel[j] * multD;
				//debug("klaar voor de aanval?");
				//debug(totoff + "--" + stacktel[j]);
				if (totoff > stackmuurtel[j]) {
				//debug("aanvaller wint?"); 
				Ratio[j] = 1; 
				}
				else if (totoff == stackmuurtel[j]) { 
					debug("dit is theoretisch zeer onwaarschijnlijk. "); // Zie hier hetzelfde als hierboven. 
				}
				else if (totoff < stackmuurtel[j]) {
				//debug("verdediging wint"); 
					Ratio[j] = Math.pow(totoff/stacktel[j], 1.5);
				}
			}
			if(totoff ==0) {totoff=1;}
			
			Ratio[3] = (infoff * Ratio[0] + cavoff * Ratio[1] + boogoff * Ratio[2])/totoff;// Zoveel gaat er van ieder dood. van elke soort troep gaat hetzelfde percentage dood.
			debug(Ratio[3]);
			
			if (n ==1) { var Rationis = Ratio[3] * stacktel[0];}
			var overleving = 1 - Ratio[3];
			debug(overleving);
			stacktel[0] = stacktel[0] * overleving;
			stacktel[1] = stacktel[1] * overleving;
			stacktel[2] = stacktel[2] * overleving;// Dit zou korter moeten kunnen. 

			if (Ratio[3] >= (settings['Percentage']/100)) { // de muur zakt minstens 1 level. 
			debug("muurtje gaat down, muurtje gaat down");
			
				if (n==1) {// ja, ik weet dat (n) ook werkt. 
					
					return  inc * Ratio[3] + 7-(stacktel[0] + stacktel[1] + stacktel[2])/1720000;//* 10/(settings['Percentage']/100);
//Het grote vraagteken :s  
			
				}
				else {
					return (inc-i + 1)* Ratio[3];//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
				}
			}
		}
			return 0;
			break;
		}
}
function stackincnone (inc, stack, moraal, muur)	{
		var stacktel = [];
		//debug(typeof stack);
		//debug("zonder boog");
		stack.splice(4, 0, '0');
		stack.splice(7, 0, '0');
		
		for (var i=0;i<2;i++) {
			stacktel[i] = 0;
			for (var j=0;j<11;j++)
			{
				var x = i + 1;
				stacktel[i] = (stacktel[i] + stack[j] * unitStat[j][x]) * 1;
			}
		}
		
		switch (settings['Stackbeoordeling']) {
			case "muur":
				var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
				var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
				var totoff = infoff + cavoff;
				var max = settings['Offopp'][8] * 2 / 45;
				var total = [0,0];
				var wall = [muur,0.5*muur,0.5*muur];
				var ratio = [0,0,0,0];
				var n = 0;
				for (var i =0;i<inc;i++) {
					n++;
					//debug("dit is de " + n + "de aanval!");
					wall[2] = 20 + 50* wall[1];
					var multD = Math.pow(1.037, wall[1]);
					var stackmuurtel = [0,0,0]
					stackmuurtel[0] = stacktel[0] * multD * infoff/totoff;
					stackmuurtel[1] = stacktel[1] * multD * cavoff/totoff;
					stackmuurtel[2] = stackmuurtel[0] + stackmuurtel[1];
					stacktel[2] = stacktel[0] + stacktel[1];
					//debug(stackmuurtel[2]);
					if (totoff > stackmuurtel[2]) {
						// aanvaller wint. je bent de sjaak. 
						ratio[0] =1;
					} 
					else if (totoff < stackmuurtel[2]) {
						ratio[0] = Math.pow((totoff/stackmuurtel[2]),1.5);
					}
					var overleving = 1 - ratio[0];
					//debug(ratio[0]);
					for (j= 0; j<2;j++) {
					stacktel[j] *= overleving;
					}
					if (ratio[0] == 1){ 
					return (inc-i)/5 * Math.round(ratio[0] * max);//7; // zelfde als hierboven, moet daar niet wat op verzonnen worden?
					
					}
					var muurzakt = ratio[0] * max;
					//debug(muurzakt);
					if (muurzakt >= 0.5) {
					//debug("muurtje gaat down, muurtje gaat down");
					//debug((inc-i)/5 * Math.round(ratio[0] * max));
					//debug(ratio[0] * max);
					//debug(inc-i);
						if (n==1) {// ja, ik weet dat (n) ook werkt. 
						//debug("hier zit het grote probleem");
							return inc * ratio[0] + 7-(stacktel[2]/1320000);
//Het grote vraagteken :s  
			
						}
						else {
							return (inc-i + 1)* ratio[0];//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
						}
					
					}
				}
			return 0;
			break;
			case "10procent":
				var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
				var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
				var totoff = infoff + cavoff;
				var max = settings['Offopp'][8] * 2 / 45;
				var total = [0,0];
				var wall = [muur,0.5*muur,0.5*muur];
				var ratio = [0,0,0,0];
				var n = 0;
				for (var i =0;i<inc;i++) {
					n++;
					wall[2] = 20 + 50* wall[1];
					var multD = Math.pow(1.037, wall[1]);
					var stackmuurtel = [0,0,0]
					stackmuurtel[0] = stacktel[0] * multD * infoff/totoff;
					stackmuurtel[1] = stacktel[1] * multD * cavoff/totoff;
					stackmuurtel[2] = stackmuurtel[0] + stackmuurtel[1];
					if (totoff > stackmuurtel[2]) {
						// aanvaller wint. je bent de sjaak. 
						ratio[0] =1;
					} 
					else if (totoff < stackmuurtel[2]) {
						ratio[0] = Math.pow((totoff/stacktel[2]),1.5);
					}
					var overleving = 1 - ratio[0];
					for (j= 0; j<2;j++) {
					stacktel[j] *= overleving;
					}
					if (ratio[0] == 1){ 
					return (inc-i)/5 * Math.round(ratio[0] * max);//7; // zelfde als hierboven, moet daar niet wat op verzonnen worden?
					
					}
					
					if (ratio[0] >= 0.1) {
					//debug("muurtje gaat down, muurtje gaat down");
					//debug((inc-i)/5 * Math.round(ratio[0] * max));
					//debug(ratio[0] * max);
					//debug(inc-i);
						if (n==1) {// ja, ik weet dat (n) ook werkt. 
							return inc * ratio[0] + 7-stacktel[2]/1320000;
//Het grote vraagteken :s  
			
						}
						else {
							return (inc-i + 1)* ratio[0];//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
						}
					
					}
				}
			return 0;
			break;
			case "percentage":
				var infoff = settings['Offopp'][2] * 40 + settings['Offopp'][9] * 100 + settings['Offopp'][8] * 2; //als hij nog iets anders gebruikt is hij mm, niet zo slim...........
				var cavoff = settings['Offopp'][5] * 130 + settings['Offopp'][7] * 150;
				var totoff = infoff + cavoff;
				var max = settings['Offopp'][8] * 2 / 45;
				var total = [0,0];
				var wall = [muur,0.5*muur,0.5*muur];
				var ratio = [0,0,0,0];
				var n = 0;
				for (var i =0;i<inc;i++) {
					n++;
					wall[2] = 20 + 50* wall[1];
					var multD = Math.pow(1.037, wall[1]);
					var stackmuurtel = [0,0,0]
					stackmuurtel[0] = stacktel[0] * multD * infoff/totoff;
					stackmuurtel[1] = stacktel[1] * multD * cavoff/totoff;
					stackmuurtel[2] = stackmuurtel[0] + stackmuurtel[1];
					if (totoff > stackmuurtel[2]) {
						// aanvaller wint. je bent de sjaak. 
						ratio[0] =1;
					} 
					else if (totoff < stackmuurtel[2]) {
						ratio[0] = Math.pow((totoff/stacktel[2]),1.5);
					}
					var overleving = 1 - ratio[0];
					for (j= 0; j<2;j++) {
					stacktel[j] *= overleving;
					}
					if (ratio[0] == 1){ 
					return (inc-i)/5 * Math.round(ratio[0] * max);//7; // zelfde als hierboven, moet daar niet wat op verzonnen worden?
					
					}
					
					if (ratio[0] >= (settings['Percentage'])/100) {
					//debug("muurtje gaat down, muurtje gaat down");
					//debug((inc-i)/5 * Math.round(ratio[0] * max));
					//debug(ratio[0] * max);
					//debug(inc-i);
						if (n==1) {// ja, ik weet dat (n) ook werkt. 
							return inc * ratio[0] + 7-stacktel[2]/1320000;
//Het grote vraagteken :s  
			
						}
						else {
							return (inc-i + 1)* ratio[0];//DIT KLOPT NIET. DIT MOET EMPIRISCH HERSTELD/Uitgebreid worden. maar dat heb ik nog niet verzonnen. :( Het is echter wel een goede vuistregel. WORDEN. 
						}
					
					}
				}
			return 0;
			break;
		}
	
	
	}