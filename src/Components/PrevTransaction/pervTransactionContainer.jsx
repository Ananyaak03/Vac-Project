import PrevTransaction from "./PrevTransaction";

function PrevTransactionContainer(props) {
  return (
    <div className="bg-white w-full max-w-4xl rounded-md py-10 flex flex-col items-center">
      {props.prevTransactions.map((tx) => (
        <PrevTransaction
          bill={tx.bill}
          tip={tx.tip}
          people={tx.people}
          tipAmount={tx.tipsAmount}
          total={tx.totalAmount}
        />
      ))}
    </div>
  );
}
export default PrevTransactionContainer;
