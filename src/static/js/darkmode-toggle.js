var active = JSON.parse(localStorage.getItem("chk"));
//const checkbox = document.getElementById("#checkbox");
document.querySelector('#chk').addEventListener("change", () => {
    active = !active;
    localStorage.setItem("chk", active);
    console.log(active);
    $("a, th, h2, h3, h4 ,p").toggleClass("dark");
    $("body, div.site-section.bg-light, site-mobile-menu").toggleClass("bg-light-dark");
});
if(active){
    $("a, th, h2, h3, h4 ,p, span").toggleClass("dark");
    $("body, div.site-section.bg-light").toggleClass("bg-light-dark");
}
//for loading
var checked = JSON.parse(localStorage.getItem("chk"));
document.getElementById("chk").checked = active;
