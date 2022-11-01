import { useEffect, useState } from "react";
import MarkdownGenerator from "../MarkdownGenerator";

const CounterWithUseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <div className="p-4">
      <h1 className="text-[1.2rem]  mb-2">1. UseEffect example</h1>
      <p>Code:</p>
      <MarkdownGenerator markdown={"CounterWithUseEffect.md"} />
      <p>Result:</p>
      <div>
        <p className="border border-black p-4">count + 1 = {count}</p>
        <p className="border border-black mt-2 p-4">
          count x 2 = {calculation}
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="border border-black p-2 mt-4"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterWithUseEffect;
