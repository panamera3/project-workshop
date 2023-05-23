document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("plus")) return;
  const featureDescription = event.target.parentNode.querySelector(
    ".feature-description"
  );
  if (!featureDescription) return;
  featureDescription.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".feature-name")) return;
  const featureName = event.target.closest(".feature-name");
  const featureDesc = featureName.parentNode.querySelector(
    ".feature-description"
  );
  featureDesc.classList.toggle("hidden");
});


var descDiv = document.getElementById("description");
var charDiv = document.getElementById("characteristics");
var descParagInner = document.getElementById("description-inner");
var charParagInner = document.getElementById("characteristics-inner");

descDiv.addEventListener("click", () => {
  descDiv.classList.toggle("active");
  charDiv.classList.toggle("active");
  descParagInner.style.display = "inline";
  charParagInner.style.display = "none";
});

charDiv.addEventListener("click", () => {
  charDiv.classList.toggle("active");
  descDiv.classList.toggle("active");
  charParagInner.style.display = "inline";
  descParagInner.style.display = "none";
});

$(".main-article").animated("zoomInUp", "ZoomOutDown");
