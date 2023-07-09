import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
function createItemForGallary(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
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

  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log("click");

  let lightbox = $("event.target").simpleLightbox();
  lightbox.on("show.simplelightbox", function () {});

  lightbox.open();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      lightbox.close();
    }
  });
}
console.log(galleryEl);