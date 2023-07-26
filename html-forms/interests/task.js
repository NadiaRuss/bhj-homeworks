let checkboxes = Array.from(document.querySelectorAll('.interest__check'));

checkboxes.forEach(elem => {
	elem.addEventListener('change', (e) => {
		// e.preventDefault;
		if (elem.checked === true) {
			elem.closest('.interest').querySelectorAll('.interest__check').forEach(el => {
				el.checked = true;
			})
		} else {
			elem.closest('.interest').querySelectorAll('.interest__check').forEach(el => {
				el.checked = false;
			})
		}
		let parentActive = elem.closest(".interests_active");
		if (parentActive) {
			let parent = elem.closest('.interests_active').parentElement.querySelector('input');
			let neighbours = parentActive.querySelectorAll('.interest__check');
			let newArr = [];
			neighbours.forEach(el => {
				newArr.push(el.checked);
			})
			if (newArr.every((element) => element === true)) {
				parent.checked = true;
				parent.indeterminate = false;
			} else if (newArr.some((element) => element === true)) {
				parent.checked = false;
				parent.indeterminate = true;
			} else if (newArr.every((element) => element === false)) {
				parent.checked = false;
				parent.indeterminate = false;
			}
		}
	})
})
// как ни старалась сделать рекурсию или while как на вебинаре подсказали, 
// не вышло к сожалению, отправляю самый первый вариант, до предков не дотягивается к сожалению