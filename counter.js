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