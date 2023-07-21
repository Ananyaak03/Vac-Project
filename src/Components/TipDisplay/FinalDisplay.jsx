import AmountDisplay from "./AmountDisplay";
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);
const accounts = await provider.send("eth_requestAccounts", []);
const signer = await provider.getSigner();

const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "bill",
        type: "string",
      },
      {
        internalType: "string",
        name: "tip",
        type: "string",
      },
      {
        internalType: "string",
        name: "people",
        type: "string",
      },
      {
        internalType: "string",
        name: "tipAmount",
        type: "string",
      },
      {
        internalType: "string",
        name: "totalAmount",
        type: "string",
      },
    ],
    name: "setBill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBill",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeStamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "bill",
            type: "string",
          },
          {
            internalType: "string",
            name: "tip",
            type: "string",
          },
          {
            internalType: "string",
            name: "people",
            type: "string",
          },
          {
            internalType: "string",
            name: "tipAmount",
            type: "string",
          },
          {
            internalType: "string",
            name: "totalAmount",
            type: "string",
          },
        ],
        internalType: "struct BillSplitter.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "bill",
        type: "string",
      },
      {
        internalType: "string",
        name: "tip",
        type: "string",
      },
      {
        internalType: "string",
        name: "people",
        type: "string",
      },
      {
        internalType: "string",
        name: "tipAmount",
        type: "string",
      },
      {
        internalType: "string",
        name: "totalAmount",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0xd2C6f158a27a9b974A219d059495a89E3a2c7c4A";
const contract = new ethers.Contract(contractAddress, abi, signer);
function FinalDisplay(props) {
  const tipsAmount = (props.displayValue[0] * props.displayValue[2]) / 100;
  const totalAmount = Math.ceil(
    parseInt(props.displayValue[0]) + tipsAmount / props.displayValue[1]
  );

  async function saveHandler() {
    if (
      props.displayValue[0] &&
      props.displayValue[1] &&
      props.displayValue[2]
    ) {
      let setBill = await contract.setBill(
        props.displayValue[0],
        props.displayValue[1],
        props.displayValue[2],
        tipsAmount,
        totalAmount
      );

      // let arr = await contract.getBill();
      console.log(tipsAmount, totalAmount);
      props.setPrevTransactions((prev) => {
        return [
          ...prev,
          {
            bill: props.displayValue[0],
            tip: props.displayValue[1],
            people: props.displayValue[2],
            tipsAmount: tipsAmount,
            totalAmount: totalAmount,
          },
        ];
      });

      props.resetBillValue("");
      props.resetPeopleValue("");
      props.resetTipValue("");
    }
  }

  return (
    <div className="bg-very-dark-cyan p-5 rounded-xl md:w-1/2 flex flex-col justify-between">
      <div>
        <AmountDisplay title="Tip Amount" type={"all"}>
          {!(props.displayValue[0] && props.displayValue[2]) ? 0 : tipsAmount}
        </AmountDisplay>
        <AmountDisplay title="Total" type={"people"}>
          {!(
            props.displayValue[0] &&
            props.displayValue[1] &&
            props.displayValue[2]
          )
            ? 0.0
            : totalAmount}
        </AmountDisplay>
      </div>
      <div>
        <button
          className="w-full bg-strong-cyan p-3 rounded-md text-very-dark-cyan text-xl mb-4"
          onClick={saveHandler}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}

export default FinalDisplay;
