// Controller managing interactions between model and view
document.addEventListener('DOMContentLoaded', function() {
    // Initial display of tasks
    displayTasks();

    // Add task form submission
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('taskInput');
        const categorySelect = document.getElementById('categorySelect');
        const taskName = taskInput.value.trim();
        const category = categorySelect.value;

        if (taskName !== '') {
            const task = new Task(taskName, category);
            taskManager.addTask(task);
            displayTasks();
            taskInput.value = '';
        }
    });
});
