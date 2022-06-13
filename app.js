const switchers = document.querySelectorAll(".container-switch__card");
console.log(switchers);
switchers.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    switchers.forEach((element) => {
      element.classList.remove("show");
    });
    this.classList.add("show");
  });
});
