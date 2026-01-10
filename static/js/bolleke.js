(() => {
  const $photos = document.querySelector(".photos");

  async function loadPhotos() {
    const photos = await getData("https://www.pgm.gent/data/dekoninck/instagram.json");
    let html = "";
    photos.forEach((photo) => {
      if (photo.category === "bolleke") {
        html += generateEventHTML(photo);
      }
    });
    $photos.innerHTML = html;
  }

  async function getData(url) {
    const response = await fetch(url);
    return await response.json();
  }

  function generateEventHTML(photo) {
    return `
      <li class="photo">
      <img src="${photo.image}" alt="${photo.alt}">
      </li>
      `;
  }

  loadPhotos();
})();
