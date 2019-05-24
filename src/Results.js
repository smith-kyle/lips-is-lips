import React from "react";
import { numImages } from "./utils";

const getTwitterUrl = text => {
  const url = new URL("https://twitter.com/intent/tweet");
  url.search = new URLSearchParams({ text });
  return url;
};

const Results = ({ score }) => {
  const percent = Math.round((score / numImages) * 100);
  return (
    <div>
      <h1>Results</h1>
      <p>{`You got ${percent}% correct!`}</p>
      <a
        class="twitter-share-button"
        href={getTwitterUrl(
          `I just got ${percent}% guessing whether a pair of lips belong to a man or woman!\n\nhttp://lipsislips.com`
        )}
      >
        Share your score on Twitter
      </a>
    </div>
  );
};

export default Results;
