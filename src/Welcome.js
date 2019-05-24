import React from "react";
import Button from "./Button";

const Welcome = ({ onStart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Lips is Lips</h1>
      <p style={{ marginBottom: 40 }}>
        Guess whether a pair of lips belong to a man or woman. It's hard because
        lips is lips!
      </p>
      <Button onClick={onStart} text="Start" />
    </div>
  );
};

export default Welcome;
