const showTime = () => { 
	Data = new Date();
	let hours = Data.getHours()
	let minutes = Data.getMinutes();
	if(hours.length < 2) {hours = "0" + hours}
	if(minutes.length < 2) {minutes = "0" + minutes}
	let now = hours + ":" + minutes;
	return now;
};



const goodMorning = () => alert('Доброе утро, Вася!');
const goodNight = () => alert('Спокойной ночи, Вася!');


function setAlarm(time, callback) {

	const id = setInterval(() => {	
		if(showTime() == time) {
		clearTimeout(id);
		return callback();
		}
	}, 1000);

}


function setDailyRhythm(wakeUpTime, bedTime) {
	const wakeUp = setAlarm(wakeUpTime, goodMorning);
	const bed = setAlarm(bedTime, goodNight);

}

setDailyRhythm('05:09', '23:50');




