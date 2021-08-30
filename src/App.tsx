import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/search-bar/SearchBar";
import WordMain from "./components/word-details/WordMain";
import { ResponseModel } from "./models/Response.model";

function App() {
  const [DictionaryData, setDictionaryData] = useState({});

  function passDictionaryData(data: ResponseModel) {
    setDictionaryData(data);
  }

  return (
    <div className={styles.container}>
      <p id="first" className={`${styles.textCenter} ${styles.heading}`}>
        Word Dictionary App
      </p>
      <SearchBar passDataFun={passDictionaryData} />
      {Object.keys(DictionaryData).length > 0 ? (
        <WordMain Data={DictionaryData} />
      ) : (
        ""
      )}
      <a href="#first" className={styles.goToTop}>
        Top
      </a>
    </div>
  );
}

export default App;
