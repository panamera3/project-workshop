const items = document.querySelectorAll(".reason");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
let count = 0;

const showNextItem = () => {
  items[count].classList.remove("active-reason");
  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("active-reason");
  window.dispatchEvent(new Event("resize"));
};

const showPreviousItem = () => {
  items[count].classList.remove("active-reason");
  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }
  items[count].classList.add("active-reason");
  window.dispatchEvent(new Event("resize"));
};

const keyPress = (e) => {
  e = e || window.event;
  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
};

nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);
document.addEventListener("keydown", keyPress);
