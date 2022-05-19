const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      name="primary"
      className="primary"
      onClick={() => console.log("I Clickeed")}
    >
      Click Mee!
    </button>
  );
};

export default Button;
