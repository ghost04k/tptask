// Model representing the structure of tasks and managing business logic
class Task {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
}

class TaskManager {
    constructor() {
        if (TaskManager.instance) {
            return TaskManager.instance;
        }
        this.tasks = [];
        TaskManager.instance = this;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }
}

// Singleton instance
const taskManager = new TaskManager();
