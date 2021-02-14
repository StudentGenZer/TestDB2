var tasksList = document.getElementById("tasks")
function addTask() {
	var inpTask = document.getElementById("inputTask").value;
	var inpPrior = document.getElementById("prior").value;
	var newTask = document.createElement("li");
	var deletButton = document.createElement("span");
	deletButton.textContent = "delet";
	deletButton.classList.add("deletBut");
	deletButton.addEventListener("click",function() {tasksList.removeChild(newTask)});

	newTask.textContent = "Prioritet "+inpPrior+": "+inpTask;
	newTask.appendChild(deletButton);
	tasksList.appendChild(newTask);
}