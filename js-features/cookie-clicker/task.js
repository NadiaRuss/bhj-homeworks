let cookie = document.getElementById('cookie');
let counter = 0;

function cookieCounter() {
	counter++;
	if (cookie.width > 160) {
		cookie.width = 150;
	} else {
		cookie.width = 200;
	}
	document.getElementById('clicker__counter').innerHTML = counter;
}
cookie.onclick = cookieCounter;