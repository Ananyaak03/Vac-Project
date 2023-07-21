function PrevTransaction(props) {
  let curr = new Date();
  return (
    <div className="text-white bg-very-dark-cyan p-5 rounded-xl flex flex-row justify-center w-fit mb-5">
      <div className="mr-5 bg-strong-cyan text-very-dark-cyan md:px-20 p-3 rounded-xl text-center">
        <p>Bill Amount </p>
        <p>Tip %</p>
        <p>Number of People </p>
        <p>Tip Amount</p>
        <p>Paid per person</p>
      </div>
      <div className="text-center  bg-strong-cyan text-very-dark-cyan p-3 rounded-xl">
        <p>${props.bill}</p>
        <p>{props.tip}%</p>
        <p>{props.people}</p>
        <p>${props.tipAmount}</p>
        <p>${props.total}</p>
      </div>
    </div>
  );
}

export default PrevTransaction;
