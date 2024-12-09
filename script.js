const header = document.querySelector(".header");
const headerTop = document.querySelector(".header-top");
const burger = document.querySelector(".burger");
const main = document.querySelector(".main");

main.style.marginTop = `${header.offsetHeight}px`;

burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})


const catalogList = document.querySelector(".catalog-list");
const overlayClose = document.querySelector(".overlay-close");
const catalogMenu = document.querySelector(".catalog-menu");
const overlay = document.querySelector(".overlay");

if(window.innerWidth > 950) {
    overlayClose.addEventListener("click", () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        catalogMenu.style.right = "-1000%";
        document.body.classList.remove("no-scroll"); 
        catalogMenu.classList.remove("active"); 
        overlay.classList.remove("active"); 
    })
    
    catalogList.addEventListener("mouseenter", () => {
        catalogMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("no-scroll");
        overlay.style.visibility = "visible"; 
        overlay.style.opacity = "1"; 
        catalogMenu.style.right = "0";
    })
    
    // Добавляем обработчик mouseleave
    catalogList.addEventListener("mouseleave", () => {
        catalogMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        catalogMenu.style.right = "-1000%";
    })
}



// ---------------------------------------------------

// ---------------------------------------------------------
const sizes = document.querySelectorAll(".sizes p");

for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", () => {
        let selectedSize = document.querySelector(".sizes p.selected");
        if (selectedSize) {
            selectedSize.classList.remove("selected");
        }
        sizes[i].classList.add("selected");
    })
}

const colors = document.querySelectorAll(".color-option");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
        let selectedColor = document.querySelector(".color-option.checked");
        if (selectedColor) {
            selectedColor.classList.remove("checked");
        }
        colors[i].classList.add("checked");
    })
}

const types = document.querySelectorAll(".types p");

for (let i = 0; i < types.length; i++) {
    types[i].addEventListener("click", () => {
        let selectedType = document.querySelector(".types p.selected");
        if (selectedType) {
            selectedType.classList.remove("selected");
        }
        types[i].classList.add("selected");
    })
}

const sorts = document.querySelectorAll(".sorts p");

for (let i = 0; i < sorts.length; i++) {
    sorts[i].addEventListener("click", () => {
        let selectedSort = document.querySelector(".sorts p.selected");
        if (selectedSort) {
            selectedSort.classList.remove("selected");
        }
        sorts[i].classList.add("selected");
    })
}