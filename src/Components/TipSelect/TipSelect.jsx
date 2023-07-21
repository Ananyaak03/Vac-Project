import Tips from "./Tips";
import Label from "../Label";
import CustomTip from "./CustomTip";
import { useState } from "react";
function TipSelect(props) {
  const [isZero, setIsZero] = useState(false);

  function inputHandlerForZero(_value) {
    setIsZero(_value);
  }

  return (
    <div>
      <Label label={"Select Tip %"} errorDisplayForZero={isZero}></Label>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 mb-8">
        <Tips value={"5"} setTipValue={props.setTipValue}></Tips>
        <Tips value={"10"} setTipValue={props.setTipValue}></Tips>
        <Tips value={"15"} setTipValue={props.setTipValue}></Tips>
        <Tips value={"25"} setTipValue={props.setTipValue}></Tips>
        <Tips value={"50"} setTipValue={props.setTipValue}></Tips>
        <CustomTip
          onInputForZero={inputHandlerForZero}
          setTipValue={props.setTipValue}
          tipValue={props.tipValue}
        ></CustomTip>
      </div>
    </div>
  );
}

export default TipSelect;
