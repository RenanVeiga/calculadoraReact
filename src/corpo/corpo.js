import React from "react";
import { Teclado } from "../teclado/teclado";
import "../App.css";

export class Corpo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor1: "",
      valor2: "",
      valorFinal: 0,
      cont: 0,
    };
    this.setValor = this.setValor.bind(this);
    this.condicional = this.condicional.bind(this);
    this.calcular = this.calcular.bind(this);
  }

  setValor(valor) {
    if (this.state.cont === 0) {
      this.setState({
        valor1: this.state.valor1.concat(valor),
      });
    } else {
      this.setState({
        valor2: this.state.valor2.concat(valor),
      });
    }
  }

  condicional(valor) {
    switch (valor) {
      default:
      console.log("fez alguma merda")
      break;
      case "-":
        this.setState({ cont: 1 });
        break;
      case "+":
        this.setState({ cont: 2 });
        break;
      case "/":
        this.setState({ cont: 3 });
        break;
      case "x":
        this.setState({ cont: 4 });
        break;
      case "c":
        this.state.cont === 0
          ? this.setState({ valor1: "" }) 
          : this.state.cont !== 5 ? this.setState({ valor2: "" }) :
          this.setState({ valor1:"", valor2:"", cont: 0});
        break;
      case "backspace":
        this.state.cont === 0
          ? this.setState((state) => {
              return { valor1: state.valor1.slice(0, -1) };
            })
          : this.setState((state) => {
              return { valor2: state.valor2.slice(0, -1) };
            });
        break;
    }
  }

  calcular(){
    const valor1 = parseFloat(this.state.valor1);
    const valor2 = parseFloat(this.state.valor2);
    
    switch(this.state.cont){
      default:
      this.setState({valor1:"", valor2:"", valorFinal: "Error - aperte C"})
      break;
      case 1:
        this.setState({valorFinal: valor1 - valor2})
      break;
      case 2:
        this.setState({valorFinal: valor1 + valor2})
      break;
      case 3:
        this.setState({valorFinal: valor1 / valor2})
      break;
      case 4:
        this.setState({valorFinal: valor1 * valor2})
      break;
    }
      this.setState({cont: 5})
  }

  render() {
    return (
      <div className="container widthmax">
        <div className="row">
          <input
            type="text"
            style={{ textAlign: "right" }}
            className="align-items-center"
            value={
              this.state.cont === 0
                ? this.state.valor1
                : this.state.cont !== 5
                ? this.state.valor2
                : this.state.valorFinal
            }
            disabled
          />
        </div>
        <div className="row align-items-center">
          <Teclado valor={this.setValor} condicional={this.condicional} calcular={this.calcular}/>
        </div>
      </div>
    );
  }
}
