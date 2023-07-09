import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
function createItemForGallary(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`;
    })
    .join("");
}
const elemAdd = createItemForGallary(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", elemAdd);

galleryEl.addEventListener("click", clickOnGallery);
function clickOnGallery(event) {
  event.preventDefault();
  const target = event.target;

  if (target.dataset.source) {
    console.log("click");
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"  width="800" height="600">`
  );
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
