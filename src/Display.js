const Display = props => {
  return (
    <div className=" text-end screen">
      <div id="formula">{props.formula.replace(/x/g, "*")}</div>
      <div id="display">{props.display.replace(/x/g, "*")}</div>
    </div>
  )
}

export default Display;