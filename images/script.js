let slides = document.querySelectorAll(".slider .slides .item");
let next_button = document.querySelector(".right button");
let prev_button = document.querySelector(".left button");

let active_slide_index = 0;

function setSlideActive(active_index){
    slides.forEach((slide,slide_index)=>{

        if(active_index===slide_index){
            slide.classList.add("active");
        }else{
            slide.classList.remove("active");
        }
    })
}

function nextSlide(){
    if(active_slide_index + 1 >= slides.length){
        active_slide_index= 0;
    }else{
        active_slide_index += 1;
    }
    setSlideActive(active_slide_index);

}
function prevSlide(){
    if(active_slide_index -1 < 0 ){
        active_slide_index= slides.length -1;
    }else{
        active_slide_index -= 1;
    }
    setSlideActive(active_slide_index);
}

prev_button.onclick = () => {
    prevSlide();
}

next_button.onclick = () => {
    nextSlide();
}

setInterval(()=>{
    nextSlide();
},5000)



setSlideActive(active_slide_index);

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
