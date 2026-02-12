let count = 0;

// Helper function to update the screen
function updateDisplay() {
    document.getElementById("count").innerHTML = count;
}

function add() {
    count++;
    updateDisplay();
}

function sub() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

window.onload = function () {
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");

    // Start the fade out
    t1.classList.add("fade-out");
    t2.classList.add("fade-out");
    t3.classList.add("fade-out");

    // Change text after fade completes (matches your 4s CSS transition)
    setTimeout(() => {
        t1.innerHTML = "COUNTER";
        t2.innerHTML = "";
        t3.innerHTML = "APP";

        // Fade back in
        t1.classList.remove("fade-out");
        t2.classList.remove("fade-out");
        t3.classList.remove("fade-out");
    }, 4000);

    // Header color transition
    setTimeout(function () {
        let h = document.getElementById("h");
        h.style.transition = "background-color 5s";
        h.style.backgroundColor = "#1050dcac";
    }, 3500);
};
