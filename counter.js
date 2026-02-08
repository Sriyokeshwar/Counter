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
    const t1 = document.getElementById("t1");
    t1.classList.add("fade-out");
    setTimeout(() => { t1.innerHTML = "COUNTER";
    t1.classList.remove("fade-out");
    },4000);
    const t2 = document.getElementById("t2");
    t2.classList.add("fade-out");
    setTimeout(() => { t2.innerHTML = "";
    t2.classList.remove("fade-out");
    },4000);
    const t3 = document.getElementById("t3");
    t3.classList.add("fade-out");
    setTimeout(() => { t3.innerHTML = "APP";
    t3.classList.remove("fade-out");
    },4000);
    
    };
