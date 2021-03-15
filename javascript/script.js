var buttons = document.querySelectorAll(".controls");

function toggleHidden() {
    var slides = document.querySelectorAll(".slide");
    for (var j = 0; j < slides.length; j++) {
        slides[j].classList.toggle("--hidden");
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", toggleHidden, false);
}
