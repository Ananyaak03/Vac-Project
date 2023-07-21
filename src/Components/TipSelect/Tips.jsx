function Tips(props) {
  return (
    <div
      onClick={() => props.setTipValue(props.value)}
      className="bg-very-dark-cyan text-white w-full  py-2  rounded-md text-xl text-center hover:bg-strong-cyan focus:bg-strong-cyan"
    >
      {props.value}%
    </div>
  );
}
export default Tips;
