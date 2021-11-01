/* eslint no-eval: 0 */

import './Calculator.sass';
import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      lastResult: "0",
      formula: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.operators = this.operators.bind(this);
    this.numbers = this.numbers.bind(this);
    this.decimal = this.decimal.bind(this);
  }

  calculate() {
    let formula = this.state.formula.replace(/x/g, "*")
    if(/[+*-/]$/.test(formula)) formula = formula.slice(0, -1)
    let result = (10000 * eval(formula) / 10000).toString();
    this.setState({
      display: result,
      formula: formula + "=" + result,
      calculated: true,
      lastResult: result
    })
  }
  
  operators(formula, operator, lastResult, calculated) {
    this.setState({display: operator, calculated: false})
    if(calculated) {
      this.setState({formula: lastResult + operator})
    //If the formula does not end in operator, lastresult will be the current formula
    } else if(!/[*+/-]$/.test(formula)) {
      this.setState({lastResult: formula, formula: formula + operator})
    } else if(!/-$/.test(formula)) {
      this.setState({
        formula: operator === "-" ? formula + operator : lastResult + operator
      })
    } else if(operator !== "-") {
      this.setState({formula: lastResult + operator})
    }
  }

  numbers(formula, num, display, calculated) {
    this.setState({calculated: false})
    if(calculated) {
      this.setState({display: num, formula: num !== "0" ? num : ""})
    } else { 
      this.setState({
      display: display === "0" || /[x/+‑]/.test(display) ? num : display + num,
      formula: 
        display === "0" && num === "0"
        ? num
        : /([^.0-9]0|^0)$/.test(formula)
        ? "" + num
        : formula + num

      });
    }
  }

  decimal(formula, display,calculated) {
    if(calculated) {
      this.setState({
      display: "0.",
      formula: "0.",
      evaluated: false
      });
    } else if(!display.includes(".")) {
      this.setState({calculated: false})
      if((/[*+/-]$/.test(formula)) || (display === "0" && formula === "")) {
        this.setState({
          display: ".0",
          formula: formula + ".0"
        })
      } else {
        this.setState({
          display: formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
          formula: formula + "."
        })
      }
    }
  }

  handleClick(e) {
    const value = e.target.getAttribute("value");
    const { display, calculated, lastResult } = this.state;
    const formula = this.state.formula.replace(/x/g, "*");
    switch(value) {
      case "AC":
        this.setState({display: "0", formula: "", lastResult: "0", calculated: false})
        break;
      case "=":
        this.calculate()
        break;
      case ".":
        this.decimal(formula, display, calculated)
        break;
      case "/":
      case "x":
      case "-":
      case "+":
        this.operators(formula, value, lastResult, calculated)
        break;
      default:
        this.numbers(formula, value, display, calculated)
        break;
    }
  }


  render() {
    return (
      <div className='calculator-box'>
        <Display display={ this.state.display} formula={ this.state.formula }/>
        <Keyboard handleClick={ this.handleClick }/>
      </div>
    );
  }

}

export default Calculator;
