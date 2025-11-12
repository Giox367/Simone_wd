const input = document.getElementById("testodainserire");
const button = document.getElementById("aggiungi");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    const li = document.createElement("li");
    li.classList.add("barbie");
    //  li.textContent = input.value;
    li.innerHTML = `${input.value} <button onclick="this.parentNode.remove()" class="delete">X</button>`
    list.appendChild(li);
    input.value = "";
});