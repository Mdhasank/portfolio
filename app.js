// ---- DOM ---- //

let hamMenu = document.querySelector(".ham-menu")
let navUlist = document.querySelector("nav ul")
let navLinks = document.querySelectorAll("nav ul li a")

hamMenu.addEventListener("click",()=>{
    hamMenu.classList.toggle("active-menu")
    navUlist.classList.toggle("active-menu")
})

navLinks.forEach(link => {
    link.addEventListener("click",()=>{
        hamMenu.classList.remove("active-menu")
        navUlist.classList.remove("active-menu")
    })
});

