let countEl = document.getElementById("count-el")
let previous = document.getElementById("previous")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let separator = " | "
    previous.textContent += count + separator
    count = 0
    countEl.innerText = 0
}