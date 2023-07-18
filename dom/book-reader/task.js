let fontSizeLink = Array.from(document.querySelectorAll('.font-size'));
let bookColor = document.querySelectorAll('.color')
let book = document.querySelector('.book')
fontSizeLink.forEach(function(elem) {
	elem.addEventListener('click', function(i) {
		i.preventDefault();
		fontSizeLink.forEach(el => {
			if (el != this) {
				el.classList.remove('font-size_active');
			}
		})
		this.classList.add('font-size_active');
		let size = elem.dataset.size;
		if (size === "small") {
			book.classList.remove('book_fs-big');
			book.classList.add('book_fs-small');
		} else if (size === "big") {
			book.classList.remove('book_fs-small');
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	})
})
let colorLink = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');
let bgLink = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white')

colorLink.forEach(function(elem) {
	elem.addEventListener('click', function(i) {
		i.preventDefault();
		colorLink.forEach(el => {
			if (el != this) {
				el.classList.remove('color_active');
			}
		})
		this.classList.add('color_active');

		let color = elem.dataset.textColor;
		if (color === "gray") {
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-whitesmoke');
			book.classList.add('book_color-gray');
		} else if (color === "whitesmoke") {
			book.classList.remove('book_color-black');
			book.classList.remove('book_color-gray');
			book.classList.add('book_color-whitesmoke');

		} else {
			book.classList.remove('book_color-gray');
			book.classList.remove('book_color-whitesmoke');
		}
	})
})
bgLink.forEach(function(elem) {
	elem.addEventListener('click', function(i) {
		i.preventDefault();
		bgLink.forEach(el => {
			if (el != this) {
				el.classList.remove('color_active');
			}
		})
		this.classList.add('color_active');

		let bgColor = elem.dataset.bgColor;

		if (bgColor === "gray") {
			book.classList.remove('book_bg-black');
			book.classList.remove('book_bg-white');
			book.classList.add('book_bg-gray');
		} else if (bgColor === "black") {
			book.classList.remove('book_bg-white');
			book.classList.remove('book_bg-gray');
			book.classList.add('book_bg-black');

		} else {
			book.classList.remove('book_bg-gray');
			book.classList.remove('book_bg-black');
		}
	})
})