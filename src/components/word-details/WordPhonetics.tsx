import React, { useState } from "react";
import { PhoneticsModel } from "../../models/Response.model";
import styles from "./WordPhonetics.module.css";
let audioTagRef = React.createRef<HTMLAudioElement>();

const WordPhonetics = (props) => {
  const [AudioState, setAudioState] = useState(false);
  let phoneticsData: PhoneticsModel = props.phoneticsData;

  function playPauseHandler() {
    if (AudioState) {
      return;
    }
    setAudioState((prev) => {
      //@ts-ignore
      audioTagRef.current.play();
      return !prev;
    });
  }

  return (
    <>
      <p className={styles.pTag}>
        Pronunciation (audio):
        <audio
          preload="auto"
          src={phoneticsData[0].audio}
          ref={audioTagRef}
          onEnded={() => {
            setAudioState(!AudioState);
          }}
        >
          <span>audio is not supported on this browser</span>
        </audio>
        <button
          className={`${styles.controls} ${
            AudioState ? styles.pause : styles.play
          }`}
          onClick={playPauseHandler}
        ></button>
      </p>
    </>
  );
};
export default WordPhonetics;
