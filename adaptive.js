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
    width: rect.width,
  };
}

const imgFeaturesBlueEllipsePos = () => {
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
};

const grayBackgroundPos = () => {
  const grayBackground = document.querySelector("#gray-background");
  const positionGrayBackground = offset(
    document.querySelector(".full-equipment")
  );
  let grayBackgroundTop =
    positionGrayBackground.top -
    (grayBackground.height - positionGrayBackground.height) / 2;
  grayBackground.style.cssText = `position: absolute; top: ${grayBackgroundTop}px; right: 0; width: ${60}%;`;
};

const whiteDecor1Pos = () => {
  const whiteDecor1 = document.querySelector("#white-decor1");
  const whiteDecor1Position = offset(
    document.querySelector("#header-main-image")
  );
  let whiteDecor1Top =
    whiteDecor1Position.top + (whiteDecor1Position.height * 1.1) / 2;
  let whiteDecor1Left = whiteDecor1Position.left - whiteDecor1.width * 1.1;
  whiteDecor1.style.cssText = `position: absolute; top: ${whiteDecor1Top}px; left: ${whiteDecor1Left}px;`;
};

const whiteDecor2Pos = () => {
  const whiteDecor2 = document.querySelector("#white-decor2");
  const whiteDecor2Position = offset(
    document.querySelector("#header-main-image")
  );
  let whiteDecor2Top =
    whiteDecor2Position.top + whiteDecor2Position.height + whiteDecor2.height;
  let whiteDecor2Left = whiteDecor2Position.left * 1.05;
  whiteDecor2.style.cssText = `position: absolute; top: ${whiteDecor2Top}px; left: ${whiteDecor2Left}px;`;
};

const greyWavyLinesPos = () => {
  const greyWavyLines = document.querySelector("#grey-wavy-lines");
  const greyWavyLinesPosition = offset(
    document.querySelector(".examples-of-work")
  );
  let greyWavyLinesTop =
    greyWavyLinesPosition.top -
    (greyWavyLines.height - greyWavyLinesPosition.height) / 2;
  greyWavyLines.style.cssText = `position: absolute; top: ${greyWavyLinesTop}px; left: 0; height: 90%;`;
};

const blueEllipsePos = () => {
  const blueEllipse = document.querySelector("#examples-of-work-blue-ellipse");
  const blueEllipsePosition = offset(
    document.querySelector(".examples-of-work")
  );
  let blueEllipseTop =
    blueEllipsePosition.top -
    (blueEllipse.height - blueEllipsePosition.height) / 2;
  blueEllipse.style.cssText = `position: absolute; top: ${blueEllipseTop}px; left: -30%; height: 100%;`;
};

const blueLadderLinePos = () => {
  const blueLadderLine = document.querySelector("#blue-ladder-line");
  const blueLadderLinePosition = offset(document.querySelector("#tuyere"));
  let blueLadderLineTop =
    blueLadderLinePosition.top - 0.5 * blueLadderLinePosition.height;
  let blueLadderLineLeft = blueLadderLinePosition.left;
  blueLadderLine.style.cssText = `position: absolute; top: ${blueLadderLineTop}px; left: ${blueLadderLineLeft}px;`;
};

const grayEllipsePos = () => {
  const grayEllipse = document.querySelector("#gray-ellipse");
  const grayEllipsePosition = offset(document.querySelector("#pricing-title"));
  let grayEllipseTop = grayEllipsePosition.top;
  grayEllipse.style.cssText = `position: absolute; top: ${grayEllipseTop}px; right: 0;`;
};

const advantagesGrayEllipse = () => {}
const advantagesBlueEllipse = () => {};

function imgPositions() {
  imgFeaturesBlueEllipsePos();
  grayBackgroundPos();
  whiteDecor1Pos();
  whiteDecor2Pos();
  greyWavyLinesPos();
  blueEllipsePos();
  blueLadderLinePos();
  grayEllipsePos();
  advantagesGrayEllipse();
}

window.addEventListener("load", () => {
  imgPositions();
  window.dispatchEvent(new Event("resize"));
});
window.addEventListener("resize", imgPositions);
