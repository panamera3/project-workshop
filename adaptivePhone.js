function offset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    bottom: rect.top + scrollTop + rect.height,
    left: rect.left + scrollLeft,
    height: rect.height,
    width: rect.width,
  };
}

const imgFeaturesBlueEllipsePosPhone = () => {
  const imgFeaturesBlueEllipse = document.querySelector(
    "#img-features-blue-ellipse2"
  );
  const positionImgFeaturesBlueEllipse = offset(
    document.querySelector("#position-img-features-blue-ellipse")
  );
  let imgFeaturesBlueEllipseTop =
    positionImgFeaturesBlueEllipse.top -
    0.2 * imgFeaturesBlueEllipse.clientHeight;
  imgFeaturesBlueEllipse.style.cssText = `display: block; width: 110%; position: absolute; top: ${imgFeaturesBlueEllipseTop}px; right: 0;`;
};

const grayBackground2Pos = () => {
  const grayBackground = document.querySelector("#gray-background2");
  const positionGrayBackground = offset(document.querySelector(".equipment"));
  let grayBackgroundTop =
    positionGrayBackground.top -
    (grayBackground.height - positionGrayBackground.height) / 2;
  grayBackground.style.cssText = `width: 100%; display: block; position: absolute; top: ${grayBackgroundTop}px; right: 0;`;
  if (grayBackground.height < positionGrayBackground.height * 1.5) {
    grayBackground.style.cssText = `height: ${
      positionGrayBackground.height * 1.5
    }px; display: block; position: absolute; top: ${grayBackgroundTop}px; right: 0;`;
  }
};

const grayBackground3Pos = () => {
  const grayBackground = document.querySelector("#gray-background3");
  const positionGrayBackground = offset(document.querySelector(".equipment"));
  let grayBackgroundTop =
    positionGrayBackground.top -
    (grayBackground.height - positionGrayBackground.height) / 2;
  grayBackground.style.cssText = `width: 120%; display: block; position: absolute; top: ${grayBackgroundTop}px; left: -10%`;
};

const whiteDecor1PosPhone = () => {
  const whiteDecor1 = document.querySelector("#white-decor1-phone");
  const whiteDecor1Position = offset(
    document.querySelector("#header-main-image")
  );
  let whiteDecor1Top =
    whiteDecor1Position.top + 0.1 * whiteDecor1Position.height;
  let whiteDecor1Left = whiteDecor1Position.left - 1.2 * whiteDecor1.width;
  whiteDecor1.style.cssText = `display: block; position: absolute; top: ${whiteDecor1Top}px; right: ${whiteDecor1Left}px;`;
};

const whiteDecor2PosPhone = () => {
  const whiteDecor2 = document.querySelector("#white-decor2-phone");
  const whiteDecor2Position = offset(
    document.querySelector("#header-main-image")
  );
  let whiteDecor2Top =
    whiteDecor2Position.top + whiteDecor2Position.height * 0.8;
  let whiteDecor2Left = whiteDecor2Position.left - whiteDecor2.width * 1.1;
  whiteDecor2.style.cssText = `position: absolute; top: ${whiteDecor2Top}px; left: ${whiteDecor2Left}px;`;
};

const greyWavyLinesPosPhone = () => {
  const greyWavyLines = document.querySelector("#grey-wavy-lines");
  const greyWavyLinesPosition = offset(
    document.querySelector(".examples-of-work")
  );
  let greyWavyLinesTop =
    greyWavyLinesPosition.top -
    (greyWavyLines.height - greyWavyLinesPosition.height) / 2;
  greyWavyLines.style.cssText = `position: absolute; top: ${greyWavyLinesTop}px; left: 0; height: 90%;`;
};

const blueEllipsePosPhone = () => {
  const blueEllipse = document.querySelector("#examples-of-work-blue-ellipse");
  const blueEllipsePosition = offset(
    document.querySelector(".examples-of-work")
  );
  let blueEllipseTop =
    blueEllipsePosition.top -
    (blueEllipse.height - blueEllipsePosition.height) / 2;
  blueEllipse.style.cssText = `width: 80%; position: absolute; top: ${blueEllipseTop}px; left: -30%; height: 100%;`;
};

const blueLadderLinePosPhone = () => {
  const blueLadderLine = document.querySelector("#blue-ladder-line");
  const blueLadderLinePosition = offset(
    document.querySelector("#tuyere-inner")
  );
  let blueLadderLineTop =
    blueLadderLinePosition.top - 0.4 * blueLadderLinePosition.height;
  let blueLadderLineRight =
    blueLadderLinePosition.left - blueLadderLine.width * 0.2;
  blueLadderLine.style.cssText = `position: absolute; top: ${blueLadderLineTop}px; right: ${blueLadderLineRight}px;`;
};

const grayEllipsePosPhone = () => {
  const grayEllipse = document.querySelector("#gray-ellipse");
  const grayEllipsePosition = offset(document.querySelector("#pricing-title"));
  let grayEllipseTop = grayEllipsePosition.top;
  grayEllipse.style.cssText = `position: absolute; top: ${grayEllipseTop}px; right: 0;`;
};

const advantagesBlueEllipsePosPhone = () => {
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

const imgBlueEllipsePosPhone = () => {
  const imgBlueEllipsePosPhone = document.querySelector("#img-blue-ellipse2");
  const imgBlueEllipsePosPhonePosition = offset(
    document.querySelector("#header-main-image")
  );
  let imgBlueEllipsePosPhonePositionTop = imgBlueEllipsePosPhonePosition.top;
  imgBlueEllipsePosPhone.style.cssText = `width: 100%; position: absolute; top: ${imgBlueEllipsePosPhonePositionTop}px; left: 0`;
};

const decorLinesPosPhone = () => {
  const decorLines = document.querySelector("#decor-lines2");
  const decorLinesPosition = offset(
    document.querySelector("#footer-description")
  );
  let decorLinesTop = decorLinesPosition.bottom - decorLines.height * 0.8;
  decorLines.style.cssText = `position: absolute; top: ${decorLinesTop}px; right: 1%`;
};

function imgPositionsPhones() {
  imgBlueEllipsePosPhone();
  imgFeaturesBlueEllipsePosPhone();
  whiteDecor1PosPhone();
  whiteDecor2PosPhone();
  greyWavyLinesPosPhone();
  blueEllipsePosPhone();
  blueLadderLinePosPhone();
  grayEllipsePosPhone();
  advantagesBlueEllipsePosPhone();
  decorLinesPosPhone();
}

window.addEventListener("load", () => {
  if (window.innerWidth < 770) {
    imgPositionsPhones();
    window.dispatchEvent(new Event("resize"));
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 770 && window.innerWidth >= 500) {
    const grayBackground = document.querySelector("#gray-background2");
    grayBackground.style.cssText = `display: none`;
    grayBackground3Pos();
    imgPositionsPhones();
  } else if (window.innerWidth < 500) {
    const grayBackground = document.querySelector("#gray-background3");
    grayBackground.style.cssText = `display: none`;
    grayBackground2Pos();
    imgPositionsPhones();
  }
});
