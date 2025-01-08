const inputTask = document.getElementById('new-task');
const btnAdd = document.getElementById('add-task');
const listTasks = document.getElementById('list-task');

let tasks = [];

function addTask() {
  const textTask = inputTask.value.trim();

  if (textTask === '') {
    alert('Digite uma tarefa antes de adicionar!');
    return;
  }

  const task = {
    id: Date.now(),
    text: textTask,
    completed: false,
  };

  tasks.push(task);
  updateTaskList();
  inputTask.value = '';
}

function toggleTaskCompletion(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  updateTaskList();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  updateTaskList();
}

function updateTaskList() {
  listTasks.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.textContent = task.text;

    const btnComplete = document.createElement('button');
    btnComplete.textContent = 'Concluir';
    btnComplete.className = 'complete';
    btnComplete.addEventListener('click', () => toggleTaskCompletion(task.id));

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Excluir';
    btnDelete.className = 'delete';
    btnDelete.addEventListener('click', () => deleteTask(task.id));

    li.appendChild(btnComplete);
    li.appendChild(btnDelete);
    listTasks.appendChild(li);
  });
}

btnAdd.addEventListener('click', addTask);

inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});


// Gerar cor de fundo aleatoria
function randomColorGenerator() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  
  const changeColor = document.getElementById('color-generator');

  changeColor.addEventListener('click', () => {
    const newColor = randomColorGenerator();
    document.body.style.backgroundColor = newColor;
  });