const tasks = [];

function showTaskModal() {
    const modal = document.getElementById('taskModal');
    modal.showModal();
}

function closeTaskModal() {
    const modal = document.getElementById('taskModal');
    modal.close();
}

function createTask(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    const task = {
        title,
        description,
        dueDate,
        priority
    };

    tasks.push(task);  // Add the task to the tasks array
    displayTask(task); // Show the task on the page
    closeTaskModal(); // Close the modal window
    document.getElementById('taskForm').reset();
}

function displayTask(task) {
    const taskContainer = document.getElementById('taskContainer');
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due: ${task.dueDate}</p>
        <p>Priority: ${task.priority}</p>
    `;
    taskContainer.appendChild(taskCard);
}

function deleteTask() {
    let taskList = "TASKS:\n";
    tasks.forEach((task, index) => {
        taskList += `${index}: ${task.title}\n`;
    });
    
    const indexToDelete = prompt(taskList + "\nEnter the number of the task to delete:");

    if (indexToDelete !== null && !isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < tasks.length) {

        tasks.splice(indexToDelete, 1);
        
        refreshTaskDisplay();
    } else {
        alert("Invalid task number!");
    }
}

function refreshTaskDisplay() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';
    
    tasks.forEach(task => {
        displayTask(task);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', createTask);

    const cancelForm = document.getElementById('cancelForm');
    cancelForm.addEventListener('click', closeTaskModal);

    const createTaskBtn = document.getElementById('createTask');
    createTaskBtn.addEventListener('click', showTaskModal);

    const deleteTaskBtn = document.getElementById('deleteTask');
    deleteTaskBtn.addEventListener('click', deleteTask);
});
