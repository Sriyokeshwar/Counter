let count = 0;
function add() {
    count++; // post increment
    document.getElementById("count").innerHTML = count;
}
function sub() {
    count--; //post decrement
    document.getElementById("count").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}
window.onload = function(){
    const h = document.getElementById("h");
    h.classList.add("fade-out");
    setTimeout(() => { h.innerHTML = "COUNTER APP";
    h.classList.remove("fade-out");
    },1000);
    
    };