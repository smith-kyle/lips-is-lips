export const MALE = "male";

export const FEMALE = "female";

const getBoundingBox = (xMin, xMax, yMin, yMax) => ({ xMin, xMax, yMin, yMax });
const METADATA = [
  [getBoundingBox(346, 472, 397, 452), [647, 800], MALE],
  [getBoundingBox(257, 313, 161, 184), [620, 375], FEMALE],
  [getBoundingBox(263, 389, 314, 396), [680, 478], MALE]
];
export const numImages = METADATA.length;
const getImagePath = n => `/images/img${n}.jpg`;
export const getImageInfo = curPage => [
  getImagePath(curPage),
  ...METADATA[curPage - 1]
];

const WIDTH_FACTOR = 0.8;
const HEIGHT_MARGIN = 40;

export const getImageScalingFacor = (windowDims, [imgWidth, imgHeight]) => {
  const targetWidth = windowDims.width * WIDTH_FACTOR;
  const targetHeight = windowDims.height - 2 * HEIGHT_MARGIN;
  const heightBasedFactor = targetHeight / imgHeight;
  const widthBasedFactor = targetWidth / imgWidth;
  if (imgHeight * widthBasedFactor > targetHeight) {
    return heightBasedFactor;
  } else {
    return widthBasedFactor;
  }
};

const getWidthBasedDeltaFactor = (windowDims, boundingBox) => {
  const targetWidth = windowDims.width * WIDTH_FACTOR;
  const lipWidth = boundingBox.xMax - boundingBox.xMin;
  return targetWidth / lipWidth;
};

const getHeightBasedDeltaFactor = (windowDims, boundingBox) => {
  const targetHeight = windowDims.height - HEIGHT_MARGIN * 2;
  const lipHeight = boundingBox.yMax - boundingBox.yMin;
  return targetHeight / lipHeight;
};

export const getNewImageDims = (
  windowDims,
  [imgWidth, imgHeight],
  boundingBox
) => {
  const widthBasedDelta = getWidthBasedDeltaFactor(windowDims, boundingBox);
  const heightBasedDelta = getHeightBasedDeltaFactor(windowDims, boundingBox);
  let deltaFactor;
  const lipWidth = boundingBox.xMax - boundingBox.xMin;
  const lipHeight = boundingBox.yMax - boundingBox.yMin;
  if (lipWidth * heightBasedDelta > windowDims.width * WIDTH_FACTOR) {
    deltaFactor = widthBasedDelta;
  } else if (
    lipHeight * widthBasedDelta >
    windowDims.height - 2 * HEIGHT_MARGIN
  ) {
    deltaFactor = heightBasedDelta;
  } else {
    deltaFactor = widthBasedDelta;
  }

  return {
    maskOffsetX: -1 * boundingBox.xMin * deltaFactor,
    maskOffsetY: -1 * boundingBox.yMin * deltaFactor,
    maskWidth: lipWidth * deltaFactor,
    maskHeight: lipHeight * deltaFactor,
    width: imgWidth * deltaFactor,
    height: imgHeight * deltaFactor
  };
};
