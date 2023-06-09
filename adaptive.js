function offset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    bottom: rect.top + scrollTop + rect.height,
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
  imgFeaturesBlueEllipse.style.cssText = `width: 40%; position: absolute; top: ${imgFeaturesBlueEllipseTop}px; left: ${imgFeaturesBlueEllipseLeft}px;`;
};

const grayBackgroundPos = () => {
  const grayBackground = document.querySelector("#gray-background");
  const positionGrayBackground = offset(document.querySelector(".equipment"));
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
    whiteDecor2Position.top +
    whiteDecor2Position.height +
    whiteDecor2.height * 0.5;
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
  blueEllipse.style.cssText = `width: 80%; position: absolute; top: ${blueEllipseTop}px; left: -30%; height: 100%;`;
};

const blueLadderLinePos = () => {
  const blueLadderLine = document.querySelector("#blue-ladder-line");
  const blueLadderLinePosition = offset(document.querySelector("#tuyere"));
  let blueLadderLineTop =
    blueLadderLinePosition.top - 0.5 * blueLadderLinePosition.height;
  let blueLadderLineLeft = blueLadderLinePosition.left;
  if (
    document.documentElement.scrollWidth >
    blueLadderLineLeft + blueLadderLine.width
  ) {
    blueLadderLine.style.cssText = `position: absolute; top: ${blueLadderLineTop}px; left: ${blueLadderLineLeft}px;`;
  } else {
    let blueLadderLineTopSmall =
      blueLadderLinePosition.top - 0.4 * blueLadderLinePosition.height;
    blueLadderLine.style.cssText = `position: absolute; top: ${blueLadderLineTopSmall}px; right: 0;`;
  }
};

const grayEllipsePos = () => {
  const grayEllipse = document.querySelector("#gray-ellipse");
  const grayEllipsePosition = offset(document.querySelector("#pricing-title"));
  let grayEllipseTop = grayEllipsePosition.top;
  grayEllipse.style.cssText = `position: absolute; top: ${grayEllipseTop}px; right: 0;`;
};

const advantagesGrayEllipsePos = () => {
  const advantagesGrayEllipse = document.querySelector(
    "#advantages-gray-ellipse"
  );
  const advantagesGrayEllipsePosition = offset(
    document.querySelector("#advantages")
  );
  let advantagesGrayEllipseTop =
    advantagesGrayEllipsePosition.top -
    advantagesGrayEllipsePosition.height * 0.2;
  advantagesGrayEllipse.style.cssText = `position: absolute; top: ${advantagesGrayEllipseTop}px; left: 0;`;
};

const advantagesBlueEllipsePos = () => {
  const advantagesBlueEllipse = document.querySelector(
    "#advantages-blue-ellipse"
  );
  const advantagesBlueEllipsePosition = offset(
    document.querySelector("#advantages")
  );
  let advantagesBlueEllipseTop =
    advantagesBlueEllipsePosition.top -
    advantagesBlueEllipsePosition.height * 0.2;
  advantagesBlueEllipse.style.cssText = `position: absolute; top: ${advantagesBlueEllipseTop}px; right: 0;`;
};

const decorLinesPos = () => {
  const decorLines = document.querySelector("#decor-lines");
  const decorLinesPositionTop = offset(document.querySelector("#application"));
  const decorLinesPositionLeft = offset(document.querySelector(".contacts"));
  let decorLinesTop =
    decorLinesPositionTop.bottom - decorLinesPositionTop.height * 0.3;
  let decorLinesRight = decorLinesPositionLeft.left - decorLines.width * 1.2;
  decorLines.style.cssText = `position: absolute; top: ${decorLinesTop}px; right: ${decorLinesRight}px`;
};

function imgPositions() {
  const whiteDecor1Phone = document.querySelector("#white-decor1-phone");
  const whiteDecor2Phone = document.querySelector("#white-decor2-phone");
  const grayBackground2 = document.querySelector("#gray-background2");
  const decorLines2 = document.querySelector("#decor-lines2");
  whiteDecor1Phone.cssText = `display: none;`;
  whiteDecor2Phone.cssText = `display: none;`;
  grayBackground2.cssText = `display: none;`;
  decorLines2.cssText = `display: none;`;
  imgFeaturesBlueEllipsePos();
  grayBackgroundPos();
  whiteDecor1Pos();
  whiteDecor2Pos();
  greyWavyLinesPos();
  blueEllipsePos();
  blueLadderLinePos();
  grayEllipsePos();
  advantagesGrayEllipsePos();
  advantagesBlueEllipsePos();
  decorLinesPos();
}

window.addEventListener("load", () => {
  if (window.innerWidth >= 770) {
    imgPositions();
    window.dispatchEvent(new Event("resize"));
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 770) {
    imgPositions();
  }
});
