
let count = 0;
let number = document.getElementById("count-el");
let saveentries = document.getElementById("save-el");

function increment(){
    count++;
    number.innerText = count;
}

function decrement(){
    count--;
    number.innerText = count;
}

function save(){
    saveentries.textContent += count + " - ";
}

function reset(){
    count = 0;
    number.innerText = count;
    saveentries.textContent = "";
}
