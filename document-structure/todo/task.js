let taskInput = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');
let button = document.querySelector('.tasks__add');
button.addEventListener('click', (event) => {
	event.preventDefault()

	if (taskInput.value.trim()) {
		taskList.insertAdjacentHTML('afterend', `<div class="task"><div class="task__title">
        ${taskInput.value.trim()}</div><a href="#" class="task__remove">&times;</a></div>`)
		taskInput.value = '';
	}

	let removeBtn = document.querySelector('.task__remove');

	removeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		let parentElemBtn = removeBtn.parentElement;
		parentElemBtn.remove();
		
	})
})