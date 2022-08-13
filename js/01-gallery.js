import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);
document.addEventListener("keydown", onKeyDown);
//const lightbox = basicLigthbox.create("");

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

const markup = createMarkup(galleryItems);
//console.log(markup);

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onOpenImg);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class ="gallery__item">
 		<a class ="gallery__link" href ="${original}">
		<img class ="gallery__image"
 		src ="${preview}"
 		data-source ="${original}"
 		alt =${description};
 		/>
		</a>
 		</div>`;
    })
    .join("");
}

function onOpenImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const url = evt.target.dataset.source;

  const instance = basicLightbox.create(`
   <img src="${url}" width="800" height="600">
`);
  instance.show();
}
function onKeyDown(evt) {
  const ESC_KEY_CODE = "Escape";
  if (evt.code === ESC_KEY_CODE) {
    lightbox.close();
  }
}
