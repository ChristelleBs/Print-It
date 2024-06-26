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

//Pour suivre l'index de l'image actuellement affichée
let currentIndex = 0;

// Ajout d'un écouteur d'événements sur la flèche droite
arrow_right.addEventListener("click", () => {
  // Calcul de l'index de la prochaine image
  let nextIndex = currentIndex + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0; // Ramène à zéro si on dépasse la longueur du tableau
  }
  // Mise à jour de l'image, du texte et de la classe 'dot_selected'
  updateSlide(nextIndex);

  // Mettre à jour currentIndex pour suivre l'image actuellement affichée
  currentIndex = nextIndex;
});

// Ajout d'un écouteur d'événements sur la flèche gauche
arrow_left.addEventListener("click", () => {
  // Calcul de l'index de l'image précédente
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = slides.length - 1; // Ramène à la dernière image si on atteint -1
  }
  // Mise à jour de l'image, du texte et de la classe 'dot_selected'
  updateSlide(prevIndex);

  // Mettre à jour currentIndex pour suivre l'image actuellement affichée
  currentIndex = prevIndex;
});

// Gestion des événements de la souris sur les flèches
function handleArrowHover() {
  document.querySelectorAll(".arrow").forEach((arrow) => {
    // Modification de la taille des flèches au chargement de la page
    //arrow.style.width = "20px";
    //arrow.style.height = "25px";

    arrow.addEventListener("mouseenter", () => {
      arrow.style.cursor = "pointer";
    });
  });
}
// Appel de la fonction pour toutes les flèches
handleArrowHover();
