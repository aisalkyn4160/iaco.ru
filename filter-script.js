const filterListLi = document.querySelectorAll(".filter-list li");

for (let i = 0; i < filterListLi.length; i++) {
    filterListLi[i].addEventListener("click", () => {
        filterListLi.forEach((item, index) => {
            if (index !== i) {
                let dropdownOptions = item.querySelector(".dropdown-options");
                item.classList.remove("active");
                item.parentNode.parentNode.classList.remove("active");
                dropdownOptions.style.visibility = "hidden";
                dropdownOptions.style.height = "0px";
            }
        });

        filterListLi[i].classList.toggle("active");
        let dropdownOptions = filterListLi[i].querySelector(".dropdown-options");
        
        if(filterListLi[i].classList.contains("active")) {
            filterListLi[i].parentNode.parentNode.classList.add("active");
            let height = dropdownOptions.scrollHeight + 'px';
            dropdownOptions.style.height = height;
            dropdownOptions.style.visibility = "visible";
            dropdownOptions.style.transition = "all 0.3s ease-in-out";
        } else {
            filterListLi[i].parentNode.parentNode.classList.remove("active");
            dropdownOptions.style.visibility = "hidden";
            dropdownOptions.style.height = "0px";
        }
    })
}

const filterSort = document.querySelector(".filter-sort");
const SortDropdown = document.querySelector(".sorts-dropdown");
const sortsClose = document.querySelector(".sorts-close");

filterSort.addEventListener("click", () => {
    filterListLi.forEach(item => {
        let dropdownOptions = item.querySelector(".dropdown-options");
        item.classList.remove("active");
        item.parentNode.parentNode.classList.remove("active");
        dropdownOptions.style.visibility = "hidden";
        dropdownOptions.style.height = "0px";
    });

    filterSort.classList.add("active");

    if(filterSort.classList.contains("active")) {
        filterSort.parentNode.classList.add("active");
        SortDropdown.style.visibility = "visible";
        SortDropdown.style.height = SortDropdown.scrollHeight + 'px';
        SortDropdown.style.transition = "all 0.3s ease-in-out";
    } else {
        closeSort();
    }
});
for (let i = 0; i < filterListLi.length; i++) {
    filterListLi[i].addEventListener("click", () => {
        if (filterSort.classList.contains("active")) {
            closeSort();
        }
        
    });
}
function closeSort() {
    filterSort.classList.remove("active");
    filterSort.parentNode.classList.remove("active");
    SortDropdown.style.visibility = "hidden";
    SortDropdown.style.height = "0px";
}

sortsClose.addEventListener("click", (e) => {
    e.stopPropagation(); 
    closeSort();
});

const filterBtn = document.querySelector(".filter-btn");
const filterList = document.querySelector(".filter-list");

if(window.innerWidth < 800) {
    filterBtn.addEventListener("click", () => {
        filterList.classList.toggle("open");
    })
}