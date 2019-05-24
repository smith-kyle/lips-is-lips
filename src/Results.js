import React from "react";
import { numImages } from "./utils";

const Results = ({ score }) => {
  return (
    <div>
      <h1>Results</h1>
      <p>{`You got ${Math.round((score / numImages) * 100)}% correct!`}</p>
      <a
        class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Lips%20is%20lips%20"
      >
        Share your score on Twitter
      </a>
    </div>
  );
};

export default Results;
