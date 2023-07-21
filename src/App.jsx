import { useState } from "react";
import FinalDisplay from "./Components/TipDisplay/FinalDisplay";
import Input from "./Components/InputField/Input";
import TipSelect from "./Components/TipSelect/TipSelect";
import PrevTransactionContainer from "./Components/PrevTransaction/pervTransactionContainer";

function App() {
  const [peopleValue, setPeopleValue] = useState("");
  const [billValue, setBillValue] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [prevTransactions, setPrevTransactions] = useState([]);

  function peopleHandler(value) {
    if (value >= 0 || value == "") {
      setPeopleValue(value);
    }
  }

  function billHandler(value) {
    if (value >= 0 || value == "") {
      setBillValue(value);
    }
  }

  return (
    <div className="flex flex-col border md:bg-gray-400 min-h-screen py-16 md:items-center font-SpaceMono ">
      <h1 className="text-center text-2xl tracking-widest text-very-dark-cyan font-semibold">
        S P L I
        <br />T T E R
      </h1>
      <div className="m-4 md:m-6 max-w-4xl  flex flex-col md:flex-row bg-white md:p-8 rounded-lg">
        <div className="md:w-1/2 mr-8">
          <Input
            label={"Bill"}
            onGetValue={billHandler}
            value={billValue}
            type={"number"}
          ></Input>
          <TipSelect setTipValue={setTipValue} tipValue={tipValue}></TipSelect>
          <Input
            label={"Number of people"}
            onGetValue={peopleHandler}
            value={peopleValue}
            type={"number"}
          ></Input>
        </div>
        <FinalDisplay
          displayValue={[billValue, peopleValue, tipValue]}
          resetBillValue={setBillValue}
          resetPeopleValue={setPeopleValue}
          resetTipValue={setTipValue}
          setPrevTransactions={setPrevTransactions}
        ></FinalDisplay>
      </div>
      <PrevTransactionContainer prevTransactions={prevTransactions} />
    </div>
  );
}

export default App;
