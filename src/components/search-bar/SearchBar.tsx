import React, { useCallback, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { debounce } from "../../utils/commonFuntion";
import { API_PATH } from "../../environment/environment";

const SearchBar = ({ passDataFun }) => {
  const [word, setWord] = useState("");

  async function callDictionaryApi(word: string) {
    if (!word) {
      return;
    }
    let response = await fetch(`${API_PATH}${word}`);
    response = await response.json();
    if (!response["message"]) {
      passDataFun(response[0]);
    } else {
      passDataFun(response);
    }
  }
  let debouncedCallApiFunction = useCallback(
    debounce(callDictionaryApi, 250),
    []
  );

  useEffect(() => {
    debouncedCallApiFunction(word);
  }, [word]);

  function inputHandler(event: any) {
    setWord(event.target.value);
  }

  return (
    <div className={styles.sticky}>
      <label htmlFor="searchBar"></label>
      <input
        type="text"
        id="searchBar"
        className={styles.box}
        placeholder={"Enter any word"}
        value={word}
        onInput={inputHandler}
      />
    </div>
  );
};
export default SearchBar;
