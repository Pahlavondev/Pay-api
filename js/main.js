let form = document.querySelector("#form");
let input = document.querySelectorAll("#form input");
let span = document.querySelectorAll("#form input + span");

form.onsubmit = function (event) {
  event.preventDefault();
  input.forEach((item, i) => {
    if (item.value === "") {
      span[i].style.cssText = "opacity: 1;";
    }
  });
};
