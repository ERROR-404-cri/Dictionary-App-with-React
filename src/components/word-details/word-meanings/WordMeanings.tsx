import styles from "./WordMeanings.module.css";
import {
  DefinitionsModel,
  MeaningsModel,
} from "../../../models/Response.model";
import { uniqueId } from "lodash";

const WordMeanings = (props) => {
  let definitionObj: MeaningsModel = props.definition;
  return (
    <>
      <p className={styles.pTag}>
        parts of speech : {definitionObj.partOfSpeech}{" "}
        <span className={styles.handDown}>👇</span>
      </p>
      {definitionObj.definitions.map((definitionelem, index) => {
        let defination: DefinitionsModel = definitionelem;
        return (
          <div key={uniqueId()} className={styles.definition}>
            <p className={styles.meaning}>
              <span>meaning</span> {index + 1}:
            </p>
            {defination.definition && (
              <p className={styles.lineHeight}>
                <span className={styles.subHeading}>definition</span> :{" "}
                {defination.definition}
              </p>
            )}
            {defination.example && (
              <p className={styles.lineHeight}>
                <span className={styles.subHeading}>example</span> :{" "}
                {defination.example}
              </p>
            )}
            {defination.synonyms[0] && (
              <p className={styles.lineHeight}>
                <span className={styles.subHeading}>synonyms</span> :{" "}
                {defination.synonyms[0]}
              </p>
            )}
            {defination.antonyms[0] && (
              <p className={styles.lineHeight}>
                <span className={styles.subHeading}>antonyms</span> :{" "}
                {defination.antonyms[0]}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};
export default WordMeanings;
