const grid = document.querySelector("#grid");
const numberOfboxes = prompt("enter number of boxes");
const size = 500 / numberOfboxes;
for (let i = 0; i < numberOfboxes*numberOfboxes; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    grid.appendChild(div);
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
}
