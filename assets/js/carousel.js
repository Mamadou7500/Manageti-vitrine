document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".icon");
  const widgets = document.querySelectorAll(".widget");

  icons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      icons.forEach((icon) => icon.classList.remove("active"));
      widgets.forEach((widget) => widget.classList.remove("active"));
      icon.classList.add("active");
      widgets[index].classList.add("active");
    });
  });
});
