import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector(".gallery");

const createElMarkup = galleryItems
  .map(
    (e) => `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
</a>`
  )
  .join("");

galleryItemsEl.insertAdjacentHTML("beforeend", createElMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: "250",
  captionPosition: "bottom",
});
