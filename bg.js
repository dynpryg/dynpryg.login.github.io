const circles = document.querySelectorAll(".circle");
circles.forEach(circle => {
    circle.addEventListener("click", ({target}) => {
        const {backgroundImage} = getComputedStyle(target)
        document.body.style.backgroundImage = backgroundImage
    })
})