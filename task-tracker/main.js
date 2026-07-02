import { TaskManager, groupBy } from "./tasks.js";

// Create Task Manager
const manager = new TaskManager();

// Select Elements
const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const clearAllButton = document.querySelector("#clear-all");

const allBtn = document.querySelector("#all-btn");
const pendingBtn = document.querySelector("#pending-btn");
const doneBtn = document.querySelector("#done-btn");

const sortSelect = document.querySelector("#sort");
const taskCounter = document.querySelector("#task-counter");

const summaryTable = document.querySelector("#summary-table");
const prioritySummary = document.querySelector("#priority-summary");

// Current State
let currentFilter = "all";
let currentSort = "";

// Update Task Summary Table
function updateTaskSummary(displayTasks) {

    summaryTable.innerHTML = "";

    displayTasks.forEach(function (task) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.priority}</td>
            <td>${task.dueDate}</td>
            <td>${task.done ? "Done" : "Pending"}</td>
        `;

        summaryTable.appendChild(row);

    });

}

// Update Priority Summary using groupBy()
function updatePrioritySummary() {

    prioritySummary.innerHTML = "";

    const groups = groupBy(manager.getAll(), "priority");

    Object.keys(groups).forEach(function (priority) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${priority}</td>
            <td>${groups[priority].length}</td>
        `;

        prioritySummary.appendChild(row);

    });

}

// Render Tasks
function renderTasks() {

    taskList.innerHTML = "";

    let displayTasks = manager.filter(currentFilter);

    // Sort
    if (currentSort !== "") {
        displayTasks = manager.sortBy(currentSort);
    }

    // Counter
    taskCounter.textContent =
        `Showing ${displayTasks.length} of ${manager.getAll().length} tasks`;

    displayTasks.forEach(function (task) {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${task.name}</strong><br>
            Priority: ${task.priority}<br>
            Due Date: ${task.dueDate}
        `;

        // Done Style
        if (task.done) {
            li.classList.add("done");
        }

        // Overdue Style
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const due = new Date(task.dueDate);

        if (due <= today) {
            li.classList.add("overdue");
        }

        // Done Button
        const doneButton = document.createElement("button");

        doneButton.textContent = task.done ? "Undo" : "Done";

        doneButton.addEventListener("click", function () {

            manager.toggle(task.id);

            renderTasks();

        });

        li.appendChild(document.createElement("br"));
        li.appendChild(doneButton);

        taskList.appendChild(li);

    });

    updateTaskSummary(displayTasks);

    updatePrioritySummary();

}
// Add Task
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskName = document.querySelector("#task-name").value.trim();
    const priority = document.querySelector("#priority").value;
    const dueDate = document.querySelector("#due-date").value;

    if (taskName === "" || dueDate === "") {
        alert("Please fill all fields.");
        return;
    }

    manager.add({
        name: taskName,
        priority: priority,
        dueDate: dueDate
    });

    renderTasks();

    form.reset();

});

// Clear All
clearAllButton.addEventListener("click", function () {

    if (confirm("Clear all tasks?")) {

        manager.clear();

        renderTasks();

    }

});

// Filter Buttons
allBtn.addEventListener("click", function () {

    currentFilter = "all";

    renderTasks();

});

pendingBtn.addEventListener("click", function () {

    currentFilter = "pending";

    renderTasks();

});

doneBtn.addEventListener("click", function () {

    currentFilter = "done";

    renderTasks();

});

// Sort Dropdown
sortSelect.addEventListener("change", function () {

    currentSort = sortSelect.value;

    renderTasks();

});

// Initial Render
renderTasks();