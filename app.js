function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    li.onclick = function () {
        li.classList.toggle("done");
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
