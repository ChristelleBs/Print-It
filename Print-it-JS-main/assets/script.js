// Pointe les différents éléments du carrousel
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const dotsContainer = document.querySelector(".dots"); // Conteneur des bullets points

//Tableau des images et des textes du diaporama
const slides = [
  {
    image: "/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//Pour connaitre le nbre d'images
//console.log(slides.length)

// Pour trouver la source des images
const srcImage = "./assets/images/slideshow";

// Sélection de l'élément p contenant le texte
const tagLineElement = document.querySelector("#banner p");

// Fonction pour mettre à jour l'image, le texte et la classe 'dot_selected'
function updateSlide(slideIndex) {
  const slide = slides[slideIndex];
  bannerImg.src = srcImage + slide.image;
  bannerImg.alt = slide.tagLine;
  tagLineElement.innerHTML = slide.tagLine;

  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
// Ajout des points au curseur et ajout d'un écouteur d'événements sur chaque point
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    // Mise à jour de l'image, du texte et de la classe 'dot_selected'
    updateSlide(index);
  });
  dotsContainer.appendChild(dot);
});
updateSlide(0);

