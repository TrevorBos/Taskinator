// Global variables
var formEl = document.querySelector ("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//function that creates a new task, gets called in the eventListener below.
var createTaskHandler = function (event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task!";
    tasksToDoEl.appendChild(listItemEl);
};

// Calls the above function to create a new task when the user clicks the button.
formEl.addEventListener("submit", createTaskHandler);
