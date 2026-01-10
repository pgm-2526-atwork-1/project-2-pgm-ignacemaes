(() => {
  const $modal = document.querySelector(".overlay");
  const $checkbox = document.querySelector(".modal__input");
  const $button = document.querySelector(".modal__button");

  let checkboxStatus;
  const agreed = localStorage.getItem("modal-status");

  if (agreed === "accepted") {
    $modal.classList.add("visually-hidden");
  }

  $checkbox.addEventListener("click", (e) => {
    checkboxStatus = e.currentTarget.dataset.status;
    if (checkboxStatus === "false") {
      checkboxStatus = "true";
    } else {
      checkboxStatus = "false";
    }
  });

  $button.addEventListener("click", () => {
    if (checkboxStatus === "true") {
      localStorage.setItem("modal-status", "accepted");
      $modal.classList.add("visually-hidden");
    }
  });
})();
