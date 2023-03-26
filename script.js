console.log("NEEE")

let mobile_menu_container = document.querySelector(".mobile-menu-container")
let mobile_menu_body = document.querySelector(".mobile-menu")
let close_button_mobile_menu = document.querySelector("#close-mobile-menu")
let open_button_mobile_menu = document.querySelector("#burger-icon")

close_button_mobile_menu.onclick = (event) => {
    event.stopPropagation();
    closeMobileMenu();
}
mobile_menu_body.onclick = (event) => {
    event.stopPropagation();
}

mobile_menu_container.onclick = () => {
    closeMobileMenu();
}
function closeMobileMenu(){
    mobile_menu_container.classList.remove("active")
}
function openMobileMenu(){
    mobile_menu_container.classList.add("active")
}
open_button_mobile_menu.onclick = (event) => {
    event.stopPropagation();
    openMobileMenu();
}

    