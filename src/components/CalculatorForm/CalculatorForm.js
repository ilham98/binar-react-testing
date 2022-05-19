import { useState } from "react";

const LoginForm = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  const handleValue1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  const onCalculateClick = () => {
    setResult(parseInt(value1) + parseInt(value2));
  };

  return (
    <div>
      <input
        value={value1}
        aria-label="input-1"
        onChange={handleValue1Change}
      />
      <input
        value={value2}
        aria-label="input-2"
        onChange={handleValue2Change}
      />
      <button onClick={onCalculateClick}>Calculate</button>
      <div data-testid="result">{result}</div>
    </div>
  );
};

export default LoginForm;
