let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    if (task.done) li.classList.add("done");

    li.innerHTML = `
      <div class="left">
        <div class="circle"></div>
        <span>${task.text}</span>
      </div>
      <div class="delete">✕</div>
    `;

    // complete toggle
    li.querySelector(".circle").onclick = () => {
      task.done = !task.done;
      save();
      render();
    };

    // delete
    li.querySelector(".delete").onclick = () => {
      tasks.splice(index, 1);
      save();
      render();
    };

    list.appendChild(li);
  });
}

// add task
document.getElementById("addBtn").onclick = () => {
  if (!input.value.trim()) return;

  tasks.push({ text: input.value, done: false });
  input.value = "";

  save();
  render();
};

render();