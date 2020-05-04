const addbtn = document.getElementById("addBtn");
const inputData = document.getElementById("inputBox");
const mainList = document.getElementById("Todo-list");




let toDoList = [];


addbtn.addEventListener("click", function() {

    if (inputData.value === "") {
        alert("You can not add an empty task")
    } else {
        toDoList.push(inputData.value);
        inputData.value = "";

        let listContent = document.createElement("div");
        listContent.classList.add("list-content");

        let newTask = document.createElement("p");
        for (i = 0; i < toDoList.length; i++) {
            newTask.innerHTML = toDoList[i];
        }


        let actBtn = document.createElement("div");
        actBtn.classList.add("actn-buttons")


        let checkBtn = document.createElement("i");
        checkBtn.classList.add("fas", "fa-check-circle", "fa-2x");
        checkBtn.addEventListener("click", function() {
            let a = newTask.innerHTML;

            newTask.innerHTML = `<del>${a}</del>`;

        })



        let trashbtn = document.createElement("i");
        trashbtn.classList.add("fas", "fa-trash", "fa-2x");
        trashbtn.addEventListener('click', function() {
            listContent.parentNode.removeChild(listContent);
            toDoList.splice();

        });


        mainList.appendChild(listContent);
        listContent.appendChild(newTask);
        listContent.appendChild(actBtn);
        actBtn.appendChild(checkBtn);
        actBtn.appendChild(trashbtn);
    }


});