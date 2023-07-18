let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let i = rotatorCase.findIndex(n => n.classList.contains('rotator__case_active'));

let interval = setInterval(() => {
	rotatorCase[i].classList.remove('rotator__case_active');
	i++

	if (i === rotatorCase.length) {
		i = 0;
	}
	rotatorCase[i].style.color = rotatorCase[i].dataset.color
	rotatorCase[i].classList.add('rotator__case_active');

}, 1000);