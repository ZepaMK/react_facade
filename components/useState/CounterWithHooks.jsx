import { useState } from "react";
import MarkdownGenerator from "../MarkdownGenerator";

const CounterWithHooks = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="p-4">
      <h1 className="text-[1.2rem]  mb-2">
        2. Counter using useState Hooks
      </h1>
      <p>Code:</p>
      <MarkdownGenerator markdown={"CounterWithHooks.md"} />
      <p>Result:</p>
      <p className="text-center">
        <button className="border border-black p-2 mr-2" onClick={decrement}>
          -
        </button>
        {count}
        <button className="border border-black p-2 ml-2" onClick={increment}>
          +
        </button>
      </p>
    </div>
  );
};

export default CounterWithHooks;
