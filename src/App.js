import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import "./App.css";
import { getImageInfo, getUrl, numImages } from "./utils";
import Welcome from "./Welcome";
import Lips from "./Lips";
import Results from "./Results";

const audio = new Audio(getUrl("/lips-song.wav"));

const App = () => {
  const [score, setScore] = useState(0);
  const [curPage, setCurPage] = useState(0);
  const [windowDims, setWindowDims] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = debounce(
      () =>
        setWindowDims({ height: window.innerHeight, width: window.innerWidth }),
      100
    );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App" style={{ height: windowDims.height }}>
      {curPage === 0 ? (
        <Welcome
          onStart={() => {
            setCurPage(1);
            audio.play();
          }}
        />
      ) : curPage > numImages ? (
        <Results score={score} />
      ) : (
        <Lips
          imageInfo={getImageInfo(curPage)}
          incrementScore={() => setScore(score + 1)}
          setNextPage={() => setCurPage(curPage + 1)}
          windowDims={windowDims}
        />
      )}
    </div>
  );
};

export default App;
