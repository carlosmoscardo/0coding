const buttons = document.querySelectorAll(".button");

function test(e) {
    if (e.type === "click" || e.type === " " || e.type === "Enter") {
        alert(e.target.textContent);
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", test);
    btn.addEventListener("keydown", test);
})