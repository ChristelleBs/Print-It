// Pointe les différents éléments du carrousel
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const dotsContainer = document.querySelector(".dots"); // Conteneur des bullet points

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

//Pour trouver la source des images
let srcImage = "./assets/images/slideshow";

//newImg = slides.image;
newImg = slides[0].image;
bannerImg.src = srcImage + newImg;

//Ajout des bullet point au slider

slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    // Suppression de la classe 'dot_selected' de tous les points pour que l'élément sélectionné se différencie
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((otherDot) => {
      otherDot.classList.remove("dot_selected");
    });
    // Ajout de la classe 'dot_selected' au point actuel
    dot.classList.add("dot_selected");
    
    console.log("Aller à l'image", index + 1);
  });
  dotsContainer.appendChild(dot);
});
