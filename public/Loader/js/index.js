window.addEventListener("DOMContentLoaded", () => {
  showLoader();
})

window.addEventListener("load", () => {
  setTimeout(() => {
      hideLoader();
    }, 2000);
})


const loader = document.getElementById("loaderPagina");
const showLoader = () => {
 loader.classList.add("show_loader");
}
const hideLoader = () => {
  loader.classList.remove("show_loader");
}


//window.addEventListener("scroll", function(){
//  var header = document.querySelector("header");
//  header.classList.toggle("abajo", window.scrollY > 0)
//})
