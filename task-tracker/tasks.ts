// Task Interface
export interface Task {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
    done: boolean;
}

// Task Manager
export class TaskManager {

    private tasks: Task[] = [];

    constructor() {
        this.load();
    }

    // Add Task
    add(data: Omit<Task, "id" | "done">): Task {

        const task: Task = {
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
    getAll(): Task[] {
        return [...this.tasks];
    }

    // Toggle Done
    toggle(id: number): void {

        const task = this.tasks.find(task => task.id === id);

        if (task) {
            task.done = !task.done;
            this.save();
        }
    }

    // Filter Tasks
    filter(status: "all" | "done" | "pending"): Task[] {

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
    sortBy(field: keyof Pick<Task, "priority" | "dueDate">): Task[] {

        const sorted = [...this.tasks];

        if (field === "priority") {

            const priorityOrder: Record<Task["priority"], number> = {
                High: 1,
                Medium: 2,
                Low: 3
            };

            sorted.sort(
                (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
            );

        } else {

            sorted.sort(
                (a, b) =>
                    new Date(a.dueDate).getTime() -
                    new Date(b.dueDate).getTime()
            );

        }

        return sorted;
    }

    // Save Tasks
    private save(): void {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    // Load Tasks
    load(): void {

        const data = localStorage.getItem("tasks");

        if (data) {
            this.tasks = JSON.parse(data) as Task[];
        }

    }

}

// Generic groupBy Function
export function groupBy<T>(
    array: T[],
    key: keyof T
): Record<string, T[]> {

    return array.reduce((groups, item) => {

        const group = String(item[key]);

        if (!groups[group]) {
            groups[group] = [];
        }

        groups[group].push(item);

        return groups;

    }, {} as Record<string, T[]>);

}