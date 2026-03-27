const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


// GALLERY IMAGES (2 per progetto)
const galleryData = [
    { title: "Dacci un Taglio", images: ["dacciuntaglio_1.jpg", "dacciuntaglio_2.jpg"] },
    { title: "SkillDo – Empoli FC", images: ["skilldo_1.jpg", "skilldo_2.jpg"] },
    { title: "Analisi Dati Finanziari", images: ["financial_1.jpg", "financial_2.jpg"] },
    { title: "Analisi Energetica SCADA", images: ["turbine_1.jpg", "turbine_2.jpg"] },
    { title: "Market Sentiment Analyzer", images: ["sentiment_1.jpg", "sentiment_2.jpg"] }
];

let projectIndex = 0;
let imageIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const galleryTitle = document.getElementById("gallery-title");

function updateGallery() {
    const project = galleryData[projectIndex];
    galleryTitle.textContent = project.title;
    galleryImage.style.opacity = 0;

    setTimeout(() => {
        galleryImage.src = `img/${project.images[imageIndex]}`;
        galleryImage.style.opacity = 1;
    }, 200);
}

// NEXT
document.getElementById("nextBtn").addEventListener("click", () => {
    imageIndex++;
    if (imageIndex >= galleryData[projectIndex].images.length) {
        imageIndex = 0;
        projectIndex = (projectIndex + 1) % galleryData.length;
    }
    updateGallery();
});

// PREV
document.getElementById("prevBtn").addEventListener("click", () => {
    imageIndex--;
    if (imageIndex < 0) {
        projectIndex = (projectIndex - 1 + galleryData.length) % galleryData.length;
        imageIndex = galleryData[projectIndex].images.length - 1;
    }
    updateGallery();
});

// START
updateGallery();
