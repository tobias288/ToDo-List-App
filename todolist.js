// Select elements  
const taskInput = document.getElementById('taskInput');  
const addTaskBtn = document.getElementById('addTaskBtn');  
const taskList = document.getElementById('taskList');  

// Function to add a new task  
function addTask() {  
    const taskText = taskInput.value.trim();  

    if (taskText === '') {  
        alert('Please enter a task');  
        return;  
    }  

    // Create a new list item  
    const li = document.createElement('li');  
    li.textContent = taskText;  

    // Create an edit button  
    const editBtn = document.createElement('button');  
    editBtn.textContent = 'Edit';  
    editBtn.onclick = function () {  
        editTask(li, taskText);  
    };  

    // Create a delete button  
    const deleteBtn = document.createElement('button');  
    deleteBtn.textContent = 'Delete';  
    deleteBtn.onclick = function () {  
        taskList.removeChild(li);  
    };  

    li.appendChild(editBtn);  
    li.appendChild(deleteBtn);  
    taskList.appendChild(li);  

    // Clear the input  
    taskInput.value = '';  
}  

// Function to edit a task  
function editTask(li, oldTaskText) {  
    const newTaskText = prompt('Edit your task:', oldTaskText);  
    
    if (newTaskText !== null && newTaskText.trim() !== '') {  
        li.firstChild.textContent = newTaskText.trim(); // Update the task text  
    }  
}  

// Event listener for the add button  
addTaskBtn.addEventListener('click', addTask);  

// Allow pressing Enter to add a task  
taskInput.addEventListener('keypress', function (e) {  
    if (e.key === 'Enter') {  
        addTask();  
    }  
});