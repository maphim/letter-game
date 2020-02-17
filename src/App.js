import React from "react";
import "./styles.css";

import ChooseGame from "./screens/ChooseGame";
import PlayGame from "./screens/PlayGame";

class App extends React.Component {
  render() {
    return (
      <div className="game-app">
        <ChooseGame />
        <PlayGame />
      </div>
    );
  }
}

export default App;
