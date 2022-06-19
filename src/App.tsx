import React from "react";
import styles from "./App.module.scss";
import { Header } from "./components/common/Header";
import text from "./i18n";
import { ActionBtn } from "./components/controls/ActionBtn";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.body}>
        <div className={styles.mainQuote}>
          <h2>{text.pages.home.quote}</h2>
          <ActionBtn
            text={text.pages.home.actionBtn}
            onClick={() => navigate("/hubs")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
