const addBuatton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
let doneTaskCount = 0;
addBuatton.addEventListener('click', function(){
    const taskInput = document.getElementById("task-input");

    const div = document.createElement('div');
    const para = document.createElement('p');
    const doneBtn = document.createElement('button');

    para.innerText = taskInput.value;
    doneBtn.innerText = 'Done';
    
    div.classList.add("card", "p-3", "border", "mt-1", "single-task");
    doneBtn.classList.add("btn", "btn-primary", "task-button");

    div.appendChild(para);
    div.appendChild(doneBtn);

    taskList.appendChild(div);
    taskInput.value = '';
    buttonListener();
    updateResult();
});

function buttonListener(){
    const taskButtons = document.getElementsByClassName("task-button");
    for(taskButton of taskButtons){
        taskButton.addEventListener('click', function(event){
            event.target.parentNode.style.color = 'red';
            event.target.parentNode.style.padding = '10px';
            event.target.parentNode.style.border = '1px solid red';
            event.target.parentNode.style.margin = '5px';
            if(event.target.innerText == 'Done'){
                event.target.setAttribute("disabled", true);
                event.target.innerText = "Completed";
                doneTaskCount++;
                updateResult();
        }
    });
}
}
function updateResult() {
    const totalTask = document.getElementById("total-task");
    const doneTask = document.getElementById("done-task");
    const undoneTask = document.getElementById("undone-task");
    document.getElementById("task-list").childElementCount;
  
    var count = parseInt(taskList.childElementCount);
    totalTask.innerText = count;
  
    doneTask.innerHTML = doneTaskCount;
    undoneTask.innerHTML = count - doneTaskCount;
  };
 
  function inputChange(event) {
    const searchKey = event.target.value.toLowerCase();
    filterNotes(searchKey);
  };
  function filterNotes(searchKey) {
    const task = document.getElementsByClassName("single-task");
     for (let i = 0; i < task.length; i++) {
       const element = task[i];
       if (element.innerText.toLowerCase().includes(searchKey)== true) {
         element.style.display = "block";
       } else {
         element.style.display = "none";
       }
     }
   }
