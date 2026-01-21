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
    if (e.currentTarget.dataset.status === "false") {
      checkboxStatus = "true";
    } else {
      checkboxStatus = "false";
    }
    e.currentTarget.dataset.status = checkboxStatus;
    console.log(checkboxStatus);
  });

  $button.addEventListener("click", () => {
    if (checkboxStatus === "true") {
      localStorage.setItem("modal-status", "accepted");
      $modal.classList.add("visually-hidden");
    }
  });
})();
