import React, { Component } from "react";
import ReactDOM from "react-dom";
import Formulario from "../componentes/Formulario";
import GlobalEstado from "../componentes/GlobalEstado/";
import Composicion from "../componentes/Composicion/";
import ThinkReact from "../componentes/ThinkReact/";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="forms-react">
          <Formulario />
          <GlobalEstado />
          <Composicion />
          <ThinkReact />
        </div>
      </div>
    );
  }
}

export default App;
