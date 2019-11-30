const showTime = () => { 
	Data = new Date();
	let now = Data.getHours() + ":" + Data.getMinutes();
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

setDailyRhythm('23:49', '23:50');




