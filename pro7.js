const containerEl = document.querySelector(".container");

for(let index=0;index<50;index++){
    const colorcontainerEl= document.createElement("div");
    colorcontainerEl.classList.add("color-container");

    const colorcodeEl = document.createElement("span");
    colorcodeEl.classList.add("color-code");
    colorcontainerEl.appendChild(colorcodeEl);

    const copybuttonEl = document.createElement("button");
    copybuttonEl.innerText = "Copy";
    colorcontainerEl.appendChild(copybuttonEl);

    containerEl.appendChild(colorcontainerEl);
    //console.log(containerEl);
}

function randomColor() {
    const chars="0123456789ABCDEF";
    const colorcodelen = 6;
    let colorcode = "";
    for(let index=0;index< colorcodelen;index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        colorcode += chars.substring(randomNum, randomNum+1);
        //console.log(colorcode);
    }

    return colorcode;
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
    for(let i=0;i<colorContainerEls.length;i++){
        const colorcontainerEl = colorContainerEls[i];
        const newcolorcode = randomColor();
        const colorcodeEl = colorcontainerEl.querySelector(".color-code");

        colorcontainerEl.style.backgroundColor = "#"+newcolorcode;

        colorcodeEl.innerText = "#"+newcolorcode;
    }
}

colorContainerEls.forEach((colorContainerEl)=>{
    const copybuttonEl = colorContainerEl.querySelector("button");
    const colorcodeEl = colorContainerEl.querySelector(".color-code");
    copybuttonEl.addEventListener("click", ()=>{
        const colorcode = colorcodeEl.innerText;
        copytoclipboard(colorcode);
    });
});

function copytoclipboard(text) {
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied to clipboard: "+text);
    })
    .catch((error)=>{
        console.log("Failed to copy",error);
    })
}