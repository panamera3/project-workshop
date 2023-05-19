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
