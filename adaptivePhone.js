function offset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(rect);
  return {
    top: rect.top + scrollTop,
    bottom: rect.top + scrollTop + rect.height,
    left: rect.left + scrollLeft,
    right: rect.left + scrollLeft + rect.width,
    height: rect.height,
    width: rect.width,
  };
}

const imgFeaturesBlueEllipsePosPhone = () => {
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
  imgFeaturesBlueEllipse.style.cssText = `width: 80%; position: absolute; top: ${imgFeaturesBlueEllipseTop}px; left: ${imgFeaturesBlueEllipseLeft}px;`;
};

const whiteDecor1PosPhone = () => {
  const whiteDecor1 = document.querySelector("#white-decor1-phone");
  const whiteDecor1Position = offset(
    document.querySelector("#header-main-image")
  );
  let whiteDecor1Top =
    whiteDecor1Position.top + 0.1 * whiteDecor1Position.height;
  let whiteDecor1Left = whiteDecor1Position.right + 0.5 * whiteDecor1.width;
  whiteDecor1.style.cssText = `display: block; position: absolute; top: ${whiteDecor1Top}px; left: ${whiteDecor1Left}px;`;
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
  const blueLadderLinePosition = offset(document.querySelector("#tuyere"));
  let blueLadderLineTop =
    blueLadderLinePosition.top - 0.5 * blueLadderLinePosition.height;
  let blueLadderLineLeft = blueLadderLinePosition.left;
  blueLadderLine.style.cssText = `position: absolute; top: ${blueLadderLineTop}px; left: ${blueLadderLineLeft}px;`;
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

const decorLinesPosPhone = () => {
  const decorLines = document.querySelector("#decor-lines2");
  const decorLinesPositionTop = offset(document.querySelector("#application"));
  const decorLinesPositionLeft = offset(
    document.querySelector(".full-application")
  );
  let decorLinesTop =
    decorLinesPositionTop.bottom - decorLinesPositionTop.height * 0.3;
  let decorLinesRight = decorLinesPositionLeft.left;
  decorLines.style.cssText = `position: absolute; top: ${decorLinesTop}px; left: ${decorLinesRight}px`;
};

const imgBlueEllipsePosPhone = () => {
  const imgBlueEllipsePosPhone = document.querySelector("#img-blue-ellipse");
  const imgBlueEllipsePosPhonePosition = offset(
    document.querySelector("#header-main-image")
  );
  let imgBlueEllipsePosPhonePositionTop =
    imgBlueEllipsePosPhonePosition.top -
    imgBlueEllipsePosPhonePosition.height / 4;
  let imgBlueEllipsePosPhonePositionLeft =
    imgBlueEllipsePosPhonePosition.left -
    imgBlueEllipsePosPhonePosition.width / 2;
  imgBlueEllipsePosPhone.style.cssText = `width: 90%; position: absolute; top: ${imgBlueEllipsePosPhonePositionTop}px; left: ${imgBlueEllipsePosPhonePositionLeft}px`;
};

function imgPositionsPhones() {
  console.log(1);
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

window.addEventListener("resize", () => {
  if (window.innerWidth < 770) {
    imgPositionsPhones();
  }
});
