const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function showNotif(message){
    let notif = document.createElement("div");
    notif.className = "notif";
    notif.innerHTML = message;
    document.body.appendChild(notif);
    
    setTimeout(function(){
        notif.remove();
    }, 2000);
}

function addTaks(){
    if(inputBox.value === ''){
        showNotif("Kamu harus menulis sesuatu!");  
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        showNotif("Task ditambahkan!");
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTaks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaks();