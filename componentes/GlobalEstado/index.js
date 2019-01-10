import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

/**
 * State Global En React
 */

const escalaNombres = {
  c: "Celsius",
  f: "Farenheit"
};

class VerificarAntes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.celsius >= 100) {
      return <p>El agua hervira</p>;
    } else {
      return <p>El agua no hervira</p>;
    }
  }
}

class GlobalEstado extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.cambiarTemperatura(e.target.value);
  }

  render() {
    const temperatura = this.props.temperatura;
    const escala = this.props.escala;
    return (
      <div>
        <div className="global-react">
          <fieldset>
            <legend>Escribe la temperatura: {escalaNombres[escala]}</legend>
            <input value={temperatura} onChange={this.handleChange} />
          </fieldset>
        </div>
      </div>
    );
  }
}

class Calculador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatura: "",
      escala: "c"
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
  }

  handleCelsiusChange(temperatura) {
    this.setState({
      temperatura: temperatura,
      escala: "c"
    });
  }

  handleFarenheitChange(temperatura) {
    this.setState({
      temperatura: temperatura,
      escala: "f"
    });
  }

  convertiraCelsius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
  }

  convertiraFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  realizarConversion(temperatura, conversion) {
    const input = parseFloat(temperatura);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = conversion(input);
    const redondeado = Math.round(output * 1000) / 100;
    return redondeado.toString();
  }

  render() {
    const escala = this.state.escala;
    const temperatura = this.state.temperatura;
    const celsius =
      escala === "f"
        ? this.realizarConversion(temperatura, this.convertiraCelsius)
        : temperatura;
    const farenheit =
      escala === "c"
        ? this.realizarConversion(temperatura, this.convertiraFarenheit)
        : temperatura;
    return (
      <div>
        <GlobalEstado
          escala={"c"}
          temperatura={celsius}
          cambiarTemperatura={this.handleCelsiusChange}
        />
        <GlobalEstado
          escala={"f"}
          temperatura={farenheit}
          cambiarTemperatura={this.handleFarenheitChange}
        />
        <VerificarAntes celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class AppGlobalEstado extends Component {
  render() {
    return (
      <div className="container-GlobalEstado">
        <Calculador />
      </div>
    );
  }
}

export default AppGlobalEstado;
