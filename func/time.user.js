function getTimeFromTW(str) {
		// NOTE: huh this actually returns the current date
		// with some new properties with the "str" time
		//17:51:31
		var timeParts = str.split(":");
		var seconds = timeParts[2];
		var val = {};
		val.hours = parseInt(timeParts[0], 10);
		val.minutes = parseInt(timeParts[1], 10);
		if (seconds.length > 2) {
			var temp = seconds.split(".");
			val.seconds = parseInt(temp[0], 10);
			val.milliseconds = parseInt(temp[1], 10);
		} 
		else {
			val.seconds = parseInt(seconds, 10);
		}
		val.totalSecs = val.seconds + val.minutes * 60 + val.hours * 3600;
		return val;
	}
function getDateFromTW(str, isTimeOnly) {
		//13.02.11 17:51:31
		var timeParts, seconds;
		if (isTimeOnly) {
			timeParts = str.split(":");
			seconds = timeParts[2];
			var val = new Date();
			val.setHours(timeParts[0]);
			val.setMinutes(timeParts[1]);
			if (seconds.length > 2) {
				var temp = seconds.split(".");
				val.setSeconds(temp[0]);
				val.setMilliseconds(temp[1]);
			} else {
				val.setSeconds(seconds);
			}
			return val;
		} 
		else {
			var parts = str.split(" ");
			var dateParts = parts[0].split(".");
			timeParts = parts[1].split(":");
			seconds = timeParts[2];
			var millis = 0;
			if (seconds.length > 2) {
				var temp = seconds.split(".");
				seconds = temp[0];
				millis = temp[1];
			} if (dateParts[2].length === 2) {
				dateParts[2] = (new Date().getFullYear() + '').substr(0, 2) + dateParts[2];
			}

			return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0], timeParts[0], timeParts[1], seconds, millis);
		}
	}
function getlooptijd(x1,y1, x2, y2, unit, aankomsttijd) {
		var dist = {};
		//debug(x1 + "\n" + x2 + "\n" + y1 + "\n" + y2 + "\n" + unit + "\n" + aankomsttijd)
		dist.fields = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
		//Math.sqrt(Math.pow(parseInt(f[0])-parseInt(t[0]),2)+Math.pow(parseInt(f[1])-parseInt(t[1]),2))
		
		var speed = unit;
		dist.tijdsduur = speed* dist.fields;
		dist.minuuttijdsduur = Math.floor(dist.tijdsduur % 60);
		dist.uurtijdsduur = Math.floor(dist.tijdsduur/ 60);
		var minuten = Math.floor(dist.tijdsduur);
		var seconden = (dist.tijdsduur -minuten) * 60;
		dist.secondentijdsduur = Math.round(seconden);
		dist.aankomsttijd = getDateFromTW(aankomsttijd, false);
		// VERZENDTIJD:
		var remainder = 0;
		if ((dist.aankomsttijd.getSeconds()-dist.secondentijdsduur -remainder) >= 0) 
		{
		//bugdebug(dist.aankomsttijd.getHours());
		dist.verzendseconde = dist.aankomsttijd.getSeconds()-dist.secondentijdsduur;
		//bugdebug(dist.verzenduur);
		}
		else {
		remainder = 1;
		dist.verzendseconde = dist.aankomsttijd.getSeconds()-dist.secondentijdsduur + 60;
		}
		if ((dist.aankomsttijd.getMinutes()-dist.minuuttijdsduur -remainder) >= 0) 
		{
		//bugdebug(dist.aankomsttijd.getHours());
		dist.verzendminuut = dist.aankomsttijd.getMinutes()-dist.minuuttijdsduur;
		}
		else {
		remainder = 1;
		dist.verzendminuut = dist.aankomsttijd.getMinutes()-dist.minuuttijdsduur + 60;
		}
		
		if ((dist.aankomsttijd.getHours()-dist.uurtijdsduur -remainder) >= 0) 
		{
		//bugdebug(dist.aankomsttijd.getHours());
		dist.verzenduur = dist.aankomsttijd.getHours()-dist.uurtijdsduur;
		//bugdebug(dist.verzenduur);
		}
		else {
		remainder = 1;
		dist.verzenduur = dist.aankomsttijd.getHours()-dist.uurtijdsduur + 24;
		}
		//bugdebug(dist.verzenduur + ":" +dist.verzendminuut+ ":"+ dist.verzendseconde); 
		return dist;
	}