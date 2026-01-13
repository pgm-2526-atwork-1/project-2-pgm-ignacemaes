(() => {
  const body = document.querySelector("body");
  const header = document.querySelector("header");

  const $nav = document.querySelector(".nav");
  const $navButton = document.querySelector(".top__button");
  const $primaryItems = document.querySelectorAll(".primary__item");
  let menuStatus = "closed";

  $primaryItems.forEach(($item) => {
    $item.addEventListener("mouseover", (e) => {
      $primaryItems.forEach(($item) => $item.classList.remove("primary__item--active"));
      e.currentTarget.classList.add("primary__item--active");
    });
  });

  $navButton.addEventListener("click", () => {
    if (menuStatus === "closed") {
      menuStatus = "open";
      body.classList.add("body--static");
      header.classList.add("header--static");
      $nav.classList.add("nav--active");
      generateMenuButtonHTML();
    } else {
      menuStatus = "closed";
      body.classList.remove("body--static");
      header.classList.remove("header--static");
      $nav.classList.remove("nav--active");
      generateMenuButtonHTML();
    }
  });

  function generateMenuButtonHTML() {
    let html;
    if (menuStatus === "closed") {
      html = `
      <p class="button__text">Menu</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
      <rect width="23" height="3" fill="#E2231A"/>
      <rect y="8" width="27" height="3" fill="#E2231A"/>
      <rect y="16" width="23" height="3" fill="#E2231A"/>
      </svg>`;
    } else {
      html = `
      <p class="button__text">Sluiten</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <rect y="16.2635" width="23" height="3" transform="rotate(-45 0 16.2635)" fill="#E2231A"/>
      <rect x="2.12134" width="23" height="3" transform="rotate(45 2.12134 0)" fill="#E2231A"/>
      </svg>`;
    }
    $navButton.innerHTML = html;
  }

  generateMenuButtonHTML();
})();
