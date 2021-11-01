const Keyboard = props => {
  return (
    <div className="keyboard">
      <div id="clear" className="button" value="AC" onClick={props.handleClick}>AC</div>
      <div id="divide" className="button" value="/" onClick={props.handleClick}>/</div>
      <div id="multiply" className="button" value="x" onClick={props.handleClick}>x</div>
      <div id="seven" className="button" value="7" onClick={props.handleClick}>7</div>
      <div id="eight" className="button" value="8" onClick={props.handleClick}>8</div>
      <div id="nine" className="button" value="9" onClick={props.handleClick}>9</div>
      <div id="subtract" className="button" value="-" onClick={props.handleClick}>-</div>
      <div id="four" className="button" value="4" onClick={props.handleClick}>4</div>
      <div id="five" className="button" value="5" onClick={props.handleClick}>5</div>
      <div id="six" className="button" value="6" onClick={props.handleClick}>6</div>
      <div id="add" className="button" value="+" onClick={props.handleClick}>+</div>
      <div id="one" className="button" value="1" onClick={props.handleClick}>1</div>
      <div id="two" className="button" value="2" onClick={props.handleClick}>2</div>
      <div id="three" className="button" value="3" onClick={props.handleClick}>3</div>
      <div id="zero" className="button" value="0" onClick={props.handleClick}>0</div>
      <div id="decimal" className="button" value="." onClick={props.handleClick}>.</div>
      <div id="equals" className="button" value="=" onClick={props.handleClick}>=</div>
    </div>
  );
}

export default Keyboard;


