import { MeaningsModel, ResponseModel } from "../../models/Response.model";
import WordDefintionsList from "./word-meanings/WordDefintionsList";
import WordPhonetics from "./WordPhonetics";
import styles from "./WordMain.module.css";

const WordMain = (props) => {
  let wordData: ResponseModel = props.Data;
  let meanings: MeaningsModel[] = wordData.meanings;
  return (
    <>
      {wordData["message"] ? (
        <p className={styles.error}>{wordData["message"]}</p>
      ) : (
        <div>
          <h2>
            Found word :{" "}
            <span className={styles.foundWord}>'{wordData.word}'</span>
          </h2>
          <WordPhonetics phoneticsData={wordData.phonetics} />
          <WordDefintionsList meanings={meanings} />
        </div>
      )}
    </>
  );
};
export default WordMain;
