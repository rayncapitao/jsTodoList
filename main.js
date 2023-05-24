const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
	if (inputBox.value === '') {
		alert('You must write something!');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}
	inputBox.value = '';
	inputBox.focus();
	saveTask();
}

listContainer.addEventListener(
	'click',
	(e) => {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('checked');
			saveTask();
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.remove();
			saveTask();
		}
	},
	false
);

inputBox.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		// 13 is the keycode for "Enter"
		e.preventDefault();
		addTask();
	}
});

function saveTask() {
	localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
