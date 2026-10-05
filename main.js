const grid = document.querySelector("#grid");
const numberOfboxes = prompt("enter number of boxes");
const size = 500 / numberOfboxes;
for (let i = 0; i < numberOfboxes * numberOfboxes; i++) {
    const div = document.createElement("div");
    let count = 0;

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    grid.appendChild(div);

    div.addEventListener("mouseover", () => {
        count++;

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        div.style.opacity = count * 0.1;
    });
}
