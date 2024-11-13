// Run function when "Add" button is clicked
document.querySelector('#push').onclick = function() {
    const taskInput = document.getElementById('task-input');

    // Check if input field is empty
    if (taskInput.value.length == 0) {
        alert("Please enter a task");
    } else {
        // Create a task element
        const task = document.createElement('div');
        task.classList.add('task');

        // Add task content
        task.innerHTML= `
           ${taskInput.value}
            <button class="delete">Delete</button>
        `;

        // Append the new task to the tasks container
        document.getElementById('tasks').appendChild(task);

        // Clear input field after adding task
        taskInput.value = '';

        // Add delete functionality to the new task
        task.querySelector('.delete').onclick = function() {
            this.parentNode.remove();
        };
    }
};
