let dropdownButton = document.querySelectorAll('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
dropdownButton.forEach(function(el) {
	el.addEventListener('click', function(i) {
		i.stopPropagation();
		dropdownButton.forEach(el => {
			if (el != this) {
				el.nextElementSibling.classList.remove('dropdown__list_active')
			}
		})
		this.nextElementSibling.classList.toggle('dropdown__list_active');
		let dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));
		dropdownLink.forEach(elem => {
			elem.addEventListener('click', (event) => {
				event.preventDefault();
				dropdownList.classList.remove('dropdown__list_active');
				el.textContent = elem.textContent;
			})
		});
	});
});