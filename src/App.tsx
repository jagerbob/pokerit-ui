import React from "react";
import styles from "./App.module.scss";
import { Header } from "./components/common/Header";
import text from "./i18n";
import { ActionBtn } from "./components/controls/ActionBtn";
import { Aurora } from "./components/common/Aurora";

function App() {
  return (
    <div className={styles.app}>
      <Aurora>
        <Header />
        <div className={styles.body}>
          <div className={styles.mainQuote}>
            <h2>{text.pages.home.quote}</h2>
            <ActionBtn text={text.pages.home.actionBtn} />
          </div>
        </div>
      </Aurora>
    </div>
  );
}

export default App;
