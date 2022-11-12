import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryItemsEl = document.querySelector(".gallery");

const createElMarkup = galleryItems
  .map(
    (el) => `
<div class="gallery__item">
 <a class="gallery__link" href="${el.original}">
   <img
     class="gallery__image"
     src="${el.preview}"
     data-source="${el.original}"
    alt="${el.description}"
  />
</a>
</div>`
  )
  .join("");
galleryItemsEl.insertAdjacentHTML("beforeend", createElMarkup);

galleryItemsEl.addEventListener("click", selectColor);

function selectColor(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  // console.log(event.target.dataset.source);
  const opts = {
    onShow: (instance) => {
      instance.element().querySelector("img").selectColor = instance.close;
      window.addEventListener("keydown", pressEscButton, { once: true });
    },
    onClose: () => {
      window.removeEventListener("keydown", pressEscButton);
    },
  };
  function pressEscButton(event) {
    if (event.key === "Escape") {
      instance.close();
      return;
    }
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    opts
  );
  instance.show();
}
