// Task Manager
export class TaskManager {
    constructor() {
        this.tasks = [];
        this.load();
    }
    // Add Task
    add(data) {
        const task = {
            id: Date.now(),
            name: data.name,
            priority: data.priority,
            dueDate: data.dueDate,
            done: false
        };
        this.tasks.push(task);
        this.save();
        return task;
    }
    // Get All Tasks
    getAll() {
        return [...this.tasks];
    }
    // Toggle Done
    toggle(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.done = !task.done;
            this.save();
        }
    }
    // Filter Tasks
    filter(status) {
        switch (status) {
            case "done":
                return this.tasks.filter(task => task.done);
            case "pending":
                return this.tasks.filter(task => !task.done);
            default:
                return [...this.tasks];
        }
    }
    // Sort Tasks
    sortBy(field) {
        const sorted = [...this.tasks];
        if (field === "priority") {
            const priorityOrder = {
                High: 1,
                Medium: 2,
                Low: 3
            };
            sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        }
        else {
            sorted.sort((a, b) => new Date(a.dueDate).getTime() -
                new Date(b.dueDate).getTime());
        }
        return sorted;
    }
    // Save Tasks
    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    // Load Tasks
    load() {
        const data = localStorage.getItem("tasks");
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }
}
// Generic groupBy Function
export function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const group = String(item[key]);
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(item);
        return groups;
    }, {});
}
