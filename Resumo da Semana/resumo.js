const pages = document.querySelectorAll(".page");

let currentPage = 0;
const totalPages = pages.length;


// define z-index inicial
pages.forEach((page, index) => {
    page.style.zIndex = totalPages - index;
});


pages.forEach((page, index) => {

    page.addEventListener("click", () => {

        // virar página para frente
        if(index === currentPage){

            page.classList.add("flipped");
            page.style.zIndex = index;

            currentPage++;

        }

        // voltar página
        else if(index === currentPage - 1){

            page.classList.remove("flipped");
            page.style.zIndex = totalPages - index;

            currentPage--;

        }

    });

});