function offset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(rect);
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    center: rect.left + (rect.right - rect.left) / 2,
    height: rect.height,
  };
}

function imgPositions() {
  const imgFeaturesBlueEllipse = document.querySelector(
    "#img-features-blue-ellipse"
  );
  const positionImgFeaturesBlueEllipse = offset(
    document.querySelector("#position-img-features-blue-ellipse")
  );
  let imgFeaturesBlueEllipseTop =
    positionImgFeaturesBlueEllipse.top -
    0.2 * imgFeaturesBlueEllipse.clientHeight;
  let imgFeaturesBlueEllipseLeft =
    positionImgFeaturesBlueEllipse.left -
    imgFeaturesBlueEllipse.clientWidth / 4;
  imgFeaturesBlueEllipse.style.cssText = `position: absolute; top: ${imgFeaturesBlueEllipseTop}px; left: ${imgFeaturesBlueEllipseLeft}px;`;

  const grayBackground = document.querySelector("#gray-background");
  const positionGrayBackground = offset(
    document.querySelector(".full-equipment")
  );
  let grayBackgroundTop =
    positionGrayBackground.top -
    (grayBackground.height - positionGrayBackground.height) / 2;
  grayBackground.style.cssText = `position: absolute; top: ${grayBackgroundTop}px; right: 0; width: ${60}%;`;
}

window.addEventListener("load", () => {
  imgPositions();
  window.dispatchEvent(new Event("resize"));
});
window.addEventListener("resize", imgPositions);
