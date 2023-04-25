const BtnSearch = document.querySelector(".btn-search");
const Search = document.querySelector(".search");
const FiledText = document.querySelector(".filed-search");
const BtnDelete = document.querySelector(".btn-delete");
const TextDelete = document.querySelector(".delete");
const SectionCars = document.querySelector("#Cars");
const SectionAbout = document.querySelector("#About");
const MainHeader = document.querySelector(".main-header");
const BtnNave = document.querySelector(".icon-navbar");
const Close = document.querySelector(".close");
console.log(close);

BtnSearch.addEventListener("click", function () {
    Search.classList.toggle("done");
    BtnDelete.classList.remove("visible");
});

BtnDelete.addEventListener("click", function () {
    FiledText.value = "";

});

FiledText.addEventListener("focus", function () {
    BtnDelete.classList.toggle("visible");

});


function myFunction() {
    var filter, ul, li, a, i, txtValue;
    filter = FiledText.value.toUpperCase();
    ul = document.querySelector(".nav-list");
    li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}

BtnNave.addEventListener("click", function () {
    MainHeader.classList.toggle("active");
    MainHeader.classList.toggle("serch-nav");
});

window.onscroll = () => {
    MainHeader.classList.remove("active");
}

