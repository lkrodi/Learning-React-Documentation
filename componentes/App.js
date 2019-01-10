import React, { Component } from "react";
import ReactDOM from "react-dom";
import Formulario from "../componentes/Formulario";
import GlobalEstado from "../componentes/GlobalEstado/";

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
        </div>
      </div>
    );
  }
}

export default App;
