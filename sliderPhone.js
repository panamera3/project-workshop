const itemsPhones = document.querySelectorAll(".reason-phones");
const itemPhonesCount = itemsPhones.length;
const nextItemPhones = document.querySelector(".next-phones");
const previousItemPhones = document.querySelector(".previous-phones");
let countPhones = 0;

const shownextItemPhones = () => {
  itemsPhones[countPhones].classList.remove("active-reason-phone");
  if (countPhones < itemPhonesCount - 1) {
    countPhones++;
  } else {
    countPhones = 0;
  }
  itemsPhones[countPhones].classList.add("active-reason-phone");
  window.dispatchEvent(new Event("resize"));
};

const showpreviousItemPhones = () => {
  itemsPhones[countPhones].classList.remove("active-reason-phone");
  if (countPhones > 0) {
    countPhones--;
  } else {
    countPhones = itemPhonesCount - 1;
  }
  itemsPhones[countPhones].classList.add("active-reason-phone");
  window.dispatchEvent(new Event("resize"));
};

const keyPressPhone = (e) => {
  e = e || window.event;
  if (e.keyCode == "37") {
    showpreviousItemPhones();
  } else if (e.keyCode == "39") {
    shownextItemPhones();
  }
};

nextItemPhones.addEventListener("click", shownextItemPhones);
previousItemPhones.addEventListener("click", showpreviousItemPhones);
document.addEventListener("keydown", keyPressPhone);
