(() => {
  $menuButton = document.querySelector(".top__button");
  $navPrimary = document.querySelector(".nav__primary");
  $primaryItems = document.querySelectorAll(".primary__item");
  $navTertiary = document.querySelector(".nav__tertiary");
  $headerCopyright = document.querySelector(".header__copyright");
  let menuStatus = "closed";
  generateMenuButtonHTML();

  $menuButton.addEventListener("click", () => {
    if (menuStatus === "closed") {
      menuStatus = "open";
      generateMenuButtonHTML();
      $navPrimary.classList.add("nav__primary--active");
      $navTertiary.classList.add("nav__tertiary--active");
      $headerCopyright.classList.add("header__copyright--active");
    } else {
      menuStatus = "closed";
      generateMenuButtonHTML();
      $navPrimary.classList.remove("nav__primary--active");
      $navTertiary.classList.remove("nav__tertiary--active");
      $headerCopyright.classList.remove("header__copyright--active");
    }
  });

  $primaryItems.forEach(($item) => {
    $item.addEventListener("mouseover", (e) => {
      $primaryItems.forEach(($item) => $item.classList.remove("primary__item--active"));
      e.currentTarget.classList.add("primary__item--active");
    });
  });

  function generateMenuButtonHTML() {
    let html;
    if (menuStatus === "closed") {
      html = `<p class="button__text">Menu</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
                <rect width="23" height="3" fill="#E2231A"/>
                <rect y="8" width="27" height="3" fill="#E2231A"/>
                <rect y="16" width="23" height="3" fill="#E2231A"/>
              </svg>`;
    } else {
      html = `<p class="button__text">Sluiten</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <rect y="16.2635" width="23" height="3" transform="rotate(-45 0 16.2635)" fill="#E2231A"/>
                <rect x="2.12134" width="23" height="3" transform="rotate(45 2.12134 0)" fill="#E2231A"/>
              </svg>`;
    }
    $menuButton.innerHTML = html;
  }
})();
