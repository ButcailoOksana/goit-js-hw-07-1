import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = createMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", openModal);
// console.log(galleryEl);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 		<a class ="gallery__link" href ="${original}">
		<img class ="gallery__image"
 		src ="${preview}"
 		alt =${description};
 		/>
		</a>`;
    })
    .join("");
}

function openModal(evt) {
  evt.preventDefault();
  if (evt.target.nodName !== "IMG") return;
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
});
lightbox.next();
