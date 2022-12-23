const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const currentValue = parseInt(star.getAttribute("data-value"));
    stars.forEach((s) => {
      if (parseInt(s.getAttribute("data-value")) <= currentValue) {
        s.classList.add("selected");
      } else {
        s.classList.remove("selected");
      }
    });
  });

  star.addEventListener("click", () => {
    const currentValue = parseInt(star.getAttribute("data-value"));
    stars.forEach((s) => {
      s.classList.remove("selected");
      if (parseInt(s.getAttribute("data-value")) <= currentValue) {
        s.classList.add("selected");
      }
    });
  });
});

document
  .getElementById("comment")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      alert("Thanks for your feedback");
    }
  });
