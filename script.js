const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  { src: "assets/pic1.jpg", alt: "Closeup of a human eye" },
  { src: "assets/pic2.jpg", alt: "Abstract Drawing" },
  { src: "assets/pic3.jpg", alt: "Flowers" },
  { src: "assets/pic4.jpg", alt: "Ancient Drawing" },
  { src: "assets/pic5.jpg", alt: "Butterfly" },
];
images.forEach(({ src, alt }) => {
  const newImage = document.createElement("img");
  newImage.src = src;
  newImage.alt = alt;
  newImage.addEventListener("click", () => {
    displayedImage.src = src;
    displayedImage.alt = alt;
  });
  thumbBar.appendChild(newImage);
});
btn.addEventListener("click", () => {
  const isDark = btn.classList.toggle("dark");
  btn.innerText = isDark ? "Lighten" : "Darken";
  overlay.style.backgroundColor = isDark ? "rgba(0, 0, 0, 0.5)" : "transparent";
});
