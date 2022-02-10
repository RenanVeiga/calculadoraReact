import React from "react";

export class Teclado extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <button type="button" className="btn btn-danger btn-sm col-3" onClick={()=> this.props.condicional('c')}>
            c
          </button>
          <button type="button" className="btn btn-danger btn-sm col-3" onClick={()=> this.props.condicional('backspace')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-backspace-reverse centerpix"
              viewBox="0 0 16 16"
            >
              <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z" />
              <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z" />
            </svg>
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary btn-sm col"
            onClick={() => this.props.valor("1")}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm col"
            onClick={() => this.props.valor("2")}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm col"
            onClick={() => this.props.valor("3")}
          >
            3
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.condicional("x")}>
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.valor("4")}>
            4
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.valor("5")}>
            5
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.valor("6")}>
            6
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={()=> this.props.condicional("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.valor("7")}>
            7
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.valor("8")}>
            8
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={() => this.props.valor("9")}>
            9
          </button>
          <button type="button" className="btn btn-primary btn-sm col" onClick={()=> this.props.condicional("+")}>
            +
          </button>
        </div>
        <div className="row justify-content-end">
          <button type="button" className="btn btn-primary btn-sm col-3" onClick={() => this.props.valor("0")}>
            0
          </button>
          <button type="button" className="btn btn-primary btn-sm col-3" onClick={() => this.props.valor(".")}>
            .
          </button>
          <button type="button" className="btn btn-primary btn-sm col-3" onClick={()=> this.props.condicional("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-success btn-sm col" onClick={()=> this.props.calcular()}>
            Calcular
          </button>
        </div>
      </div>
    );
  }
}
