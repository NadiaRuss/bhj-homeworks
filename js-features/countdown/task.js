let seconds = 60;
let nowDate = new Date();
let deadlineTime = nowDate.setSeconds(nowDate.getSeconds() + seconds);
let countdown = setInterval(function() {
	let now = new Date().getTime();
	let restOfTime = deadlineTime - now;
	let sec = Math.floor((restOfTime % (1000 * 60)) / 1000);
	sec = sec < 10 ? "0" + sec : sec;
	document.getElementById("timer").innerHTML = sec;
	if (restOfTime < 1) {
		clearInterval(countdown);
		alert("Вы победили в конкурсе!");
		document.getElementById("timer").innerHTML = "00";
	}
}, 1000);