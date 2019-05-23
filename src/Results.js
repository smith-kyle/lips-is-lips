import React from "react";

const Results = ({ score }) => {
  return (
    <div>
      <h1>Results</h1>
      <p>{`You got ${Math.round(score / 10)}% correct!`}</p>
      <a
        class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Lips%20is%20lips%20"
      >
        Share
      </a>
    </div>
  );
};

export default Results;
