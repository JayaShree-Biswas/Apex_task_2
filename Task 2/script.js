// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    event.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email!");
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});

// To-Do List
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
