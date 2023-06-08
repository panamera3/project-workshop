// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("menuBtn");
// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
};

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = () => {
  modal.style.display = "none"; 
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
};
