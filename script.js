function showRejectModal(taskName) {
    document.getElementById('rejectModal').classList.add('is-active');
}

function hideRejectModal() {
    document.getElementById('rejectModal').classList.remove('is-active');
}
function addTask() {
    const goal = document.getElementById('goal').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;

    if (goal && time && date) {
        const tasksContainer = document.getElementById('tasks');

        const newTask = document.createElement('div');
        newTask.innerHTML = `
            <label class="checkbox">
                <input type="checkbox">
                ${goal} | ${date} ${time}
                <progress class="progress is-danger" value="0" max="100">0%</progress>
            </label>
        `;

        tasksContainer.appendChild(newTask);

        document.getElementById('goal').value = '';
        document.getElementById('time').value = '08:00';
        document.getElementById('date').value = '2023-12-12';
    }
}

document.getElementById('add-btn').addEventListener('click', addTask);
