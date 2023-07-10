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
let instance = null;
function clickOnGallery(event) {
  event.preventDefault();

  // const target = event.target;

  if (event.target.dataset.source) {
    console.log("click");
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"  width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", KeyboardEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", KeyboardEsc);
      },
    }
  );

  instance.show();
}

function KeyboardEsc(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}
