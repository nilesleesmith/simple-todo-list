const inputTask = document.querySelector('input');
const buttonAddTask = document.querySelector('.button');
const listToDo = document.querySelectorAll('ol')[0];
const listDoneDo = document.querySelectorAll('ol')[1];

buttonAddTask.addEventListener('click', () => {
    const text = inputTask.value;

    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            listDoneDo.appendChild(li);
        } else {
            listToDo.appendChild(li);
        }
    });

    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    listToDo.appendChild(li);

    inputTask.value = '';
});
