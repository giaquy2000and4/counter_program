const decrease_btn = document.getElementById("decrease-btn");
const reset_btn = document.getElementById("reset-btn");
const increase_btn = document.getElementById("increase-btn");
const index_number = document.getElementById("index-number");

let count = 0;

increase_btn.onclick = function() {
    count++;
    index_number.textContent = count;
}

decrease_btn.onclick = function () {
    count--;
    index_number.textContent = count;
}

reset_btn.onclick = function() {
    count = 0;
    index_number.textContent = count;
}
