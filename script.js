const images = document.querySelectorAll(".slider img");
const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentImage = 0;

const renderImages = (direction) => {

    

    images.forEach((image) => {
        image.style.display = "none"
    });

    // Update index
    currentImage = currentImage + direction;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

   
    images[currentImage].style.display = "";
};


// Auto-render
setInterval(() => {
    renderImages(1);
}, 2000);

// Button controls
nextButton.addEventListener("click", () => {
    renderImages(1);
});

previousButton.addEventListener("click", () => {
    renderImages(-1);
});

// Initial render
renderImages(0);

