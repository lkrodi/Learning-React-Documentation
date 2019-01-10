import React, { Component } from "react";
import ReactDOM from "react-dom";
import Formulario from "../componentes/Formulario";
import GlobalEstado from "../componentes/GlobalEstado/";
import ThinkReact from "../componentes/ThinkReact/";
import "./style.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3 className="center">ReactJS</h3>
        <div className="forms-react">
          <Formulario />
          <GlobalEstado />
          <ThinkReact />
        </div>
      </div>
    );
  }
}

export default App;
