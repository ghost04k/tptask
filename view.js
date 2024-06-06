// Abstract class for rendering tasks
class TaskRenderer {
    render(task) {
        throw new Error("This method must be implemented by subclasses");
    }
}

// Concrete classes for rendering tasks by category
class WorkTaskRenderer extends TaskRenderer {
    render(task) {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.name;
        taskItem.style.color = 'red';
        return taskItem;
    }
}

class HomeTaskRenderer extends TaskRenderer {
    render(task) {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.name;
        taskItem.style.color = 'blue';
        return taskItem;
    }
}

class MiscTaskRenderer extends TaskRenderer {
    render(task) {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.name;
        taskItem.style.color = 'green';
        return taskItem;
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = taskManager.getTasks();
    tasks.forEach(task => {
        let renderer;
        if (task.category === 'work') {
            renderer = new WorkTaskRenderer();
        } else if (task.category === 'home') {
            renderer = new HomeTaskRenderer();
        } else {
            renderer = new MiscTaskRenderer();
        }
        const taskItem = renderer.render(task);
        taskList.appendChild(taskItem);
    });
}
