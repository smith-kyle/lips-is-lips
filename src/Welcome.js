import React, { useState } from "react";

const Welcome = ({ onStart }) => {
  return (
    <div>
      <h1>Lips is Lips</h1>
      <p>
        Guess whether a pair of lips belong to a man or woman. It's hard because
        Lips is Lips!
      </p>
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default Welcome;
