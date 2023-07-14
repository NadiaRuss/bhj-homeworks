let tab = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));
tab.forEach(function(someTab) {
	someTab.addEventListener('click', function(i) {
		i.stopPropagation();
		tab.forEach(el => {
			if (el != this) {
				el.classList.remove('tab_active');
			}
			tabContent.forEach(tc => {
				if (tc != this) {
					tc.classList.remove('tab__content_active');
				}
			})
		})
		this.classList.add('tab_active');
		let index = tab.findIndex(n => n.classList.contains('tab_active'));
		tabContent[index].classList.add('tab__content_active');
	})
})