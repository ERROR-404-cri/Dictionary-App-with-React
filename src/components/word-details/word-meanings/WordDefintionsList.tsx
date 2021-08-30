import { MeaningsModel } from "../../../models/Response.model";
import WordMeanings from "./WordMeanings";
import { uniqueId } from "lodash";
import styles from "./WordDefintionsList.module.css";

const WordDefintionsList = (props: any) => {
  let meaningsArr: MeaningsModel[] = props.meanings;
  return (
    <>
      {meaningsArr.map((definition) => {
        return (
          <div className={styles.defination} key={uniqueId()}>
            <WordMeanings definition={definition} />
          </div>
        );
      })}
    </>
  );
};
export default WordDefintionsList;
