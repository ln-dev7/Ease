const switchers = document.querySelectorAll(".container-switch__card");
const ampules = document.querySelectorAll(".main-right__img img");
const modes = document.querySelectorAll(".container-mode__card");
const textes = document.querySelectorAll(".main-left-right div");
const bgTextes = document.querySelector(".main-left-right");
const avatars = document.querySelectorAll(".main-left-img img");
const bg = document.querySelector(".main-right");

switchers.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    switchers.forEach((element) => {
      element.classList.remove("show");
    });
    this.classList.add("show");

    if (switchers[0].classList.contains("show")) {
      ampules[0].classList.add("show");
      ampules[1].classList.remove("show");
      ampules[2].classList.remove("show");

      textes[0].classList.add("show");
      textes[1].classList.remove("show");
      textes[2].classList.remove("show");

      avatars[0].classList.add("show");
      avatars[1].classList.remove("show");
      avatars[2].classList.remove("show");

      bg.classList.remove("dark");
      bgTextes.classList.remove("blue");
    }
    if (switchers[1].classList.contains("show")) {
      ampules[1].classList.add("show");
      ampules[0].classList.remove("show");
      ampules[2].classList.remove("show");

      textes[1].classList.add("show");
      textes[0].classList.remove("show");
      textes[2].classList.remove("show");

      avatars[1].classList.add("show");
      avatars[0].classList.remove("show");
      avatars[2].classList.remove("show");

      bgTextes.classList.add("blue");
    }
    if (switchers[2].classList.contains("show")) {
      ampules[2].classList.add("show");
      ampules[0].classList.remove("show");
      ampules[1].classList.remove("show");

      textes[2].classList.add("show");
      textes[0].classList.remove("show");
      textes[1].classList.remove("show");

      avatars[2].classList.add("show");
      avatars[0].classList.remove("show");
      avatars[1].classList.remove("show");

      bg.classList.remove("dark");
      bgTextes.classList.remove("blue");
    }

    modes[0].addEventListener("click", function (e) {
      e.preventDefault();
      if (switchers[1].classList.contains("show")) {
        bg.classList.remove("dark");
      }
    });
    modes[1].addEventListener("click", function (e) {
      e.preventDefault();
      if (switchers[1].classList.contains("show")) {
        bg.classList.add("dark");
      }
    });
  });
});
