let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {

	getHole = index => document.getElementById(`hole${index}`)
	let hole = getHole(index);


	function counterFunc() {
		if (hole.className.includes("hole_has-mole") === true) {
			dead.innerHTML++;
		} else {
			lost.innerHTML++;
		}

		if (+dead.textContent === 10) {
			alert("Вы победили!");
			dead.innerHTML = 0;
			lost.innerHTML = 0;
		} else if (+lost.textContent === 5) {
			alert("Вы проиграли");
			dead.innerHTML = 0;
			lost.innerHTML = 0;
		}
	}
	hole.onclick = counterFunc;
}