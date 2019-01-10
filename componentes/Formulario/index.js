import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

/**
 * Los inputs de tipo file, no son controlados por react
 * Los componentes controlados son aquellos que hacen referencia al dom en si
 * es como hacer un getElementById() literalmente
 */

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "",
      Country: "",
      value: "Coconout",
      va: true,
      numeroInvitados: 2
    };

    this.Pais = React.createRef();
    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.info(this.state);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    console.log("Input Componente no controlado", this.Pais.current.value);
    console.log(
      "Input File Componente no controlado",
      this.fileInput.current.files[0].name
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Favorite:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          Favorite Multiple:
          <select
            multiple={true}
            value={["grapefruit", "lime"]}
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          File
          <input type="file" />
        </label>
        <br />
        <label>
          Va:
          <input
            type="checkbox"
            name="va"
            checked={this.state.va}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            name="numeroInvitados"
            value={this.state.numeroInvitados}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Input Componente no Controlado
          <input type="text" ref={this.Pais} defaultValue="Last" />
        </label>
        <label>
          <br />
          File Componente no Controlado
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class AppFormulario extends Component {
  render() {
    return (
      <div className="container-Formulario">
        <Formulario />;
      </div>
    );
  }
}

export default AppFormulario;
