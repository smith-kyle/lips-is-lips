import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import { MALE, FEMALE, getNewImageDims, getImageScalingFacor } from "./utils";
import Button from "./Button";

const Lips = ({ imageInfo, incrementScore, setNextPage, windowDims }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [path, boundingBox, imgDims, gender] = imageInfo;
  const revealedDims = getNewImageDims(windowDims, imgDims, boundingBox);
  const imageScalingFactor = getImageScalingFacor(windowDims, imgDims);
  if (isLoading) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Motion
        style={{
          maskWidth: spring(
            isRevealed
              ? imgDims[0] * imageScalingFactor
              : revealedDims.maskWidth
          ),
          maskHeight: spring(
            isRevealed
              ? imgDims[1] * imageScalingFactor
              : revealedDims.maskHeight
          ),
          maskOffsetX: spring(isRevealed ? 0 : revealedDims.maskOffsetX),
          maskOffsetY: spring(isRevealed ? 0 : revealedDims.maskOffsetY),
          imgWidth: spring(
            isRevealed ? imgDims[0] * imageScalingFactor : revealedDims.width
          ),
          imgHeight: spring(
            isRevealed ? imgDims[1] * imageScalingFactor : revealedDims.height
          )
        }}
      >
        {({
          maskWidth,
          maskHeight,
          maskOffsetX,
          maskOffsetY,
          imgWidth,
          imgHeight
        }) => (
          <div
            style={{
              marginTop: 10,
              maxWidth: maskWidth,
              maxHeight: maskHeight,
              textIndent: maskOffsetX,
              height: imgHeight,
              overflow: "hidden"
            }}
          >
            <img
              alt="Gender ambiguous lips"
              src={path}
              style={{
                height: imgHeight,
                width: imgWidth,
                marginTop: maskOffsetY
              }}
            />
          </div>
        )}
      </Motion>
      {!isRevealed ? (
        <div className="choices" style={{ display: "flex" }}>
          <Button
            text="Boy"
            onClick={() => {
              setIsRevealed(true);
              if (gender === MALE) {
                incrementScore();
              }
            }}
          />
          <Button
            text="Girl"
            onClick={() => {
              setIsRevealed(true);
              if (gender === FEMALE) {
                incrementScore();
              }
            }}
          />
        </div>
      ) : null}
      {isRevealed ? (
        <Button
          text="Next"
          onClick={() => {
            setIsLoading(true);
            setIsRevealed(false);
            setNextPage();
            setTimeout(() => setIsLoading(false), 0);
          }}
        />
      ) : null}
    </div>
  );
};

export default Lips;
