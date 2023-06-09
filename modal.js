var modal = document.querySelector("#myModal");
var btn = document.querySelector("#menuBtn");
// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
};

var closeImg = document.querySelector(".close");
// Когда пользователь нажимает на X, закройте модальное окно
closeImg.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
};

// когда пользователь нажимает на ссылку
var titleButton = document.querySelectorAll(".modal a");
titleButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    window.location.href = event.target.href; // переход по ссылке
  });
});

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
};
