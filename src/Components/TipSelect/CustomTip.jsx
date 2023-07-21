function CustomTip(props) {
  function getValueHandler(event) {
    if (parseInt(event.target.value) != 0) {
      props.onInputForZero(false);
    } else props.onInputForZero(true);

    if (parseInt(event.target.value) >= 0 || event.target.value == "") {
      props.setTipValue(parseInt(event.target.value));
    }
  }

  return (
    <input
      type="number"
      className="text-center outline-none text-xl placeholder:text-dark-grayish-cyan"
      placeholder="Custom"
      onChange={getValueHandler}
      value={props.tipValue}
      min="0"
    ></input>
  );
}

export default CustomTip;
