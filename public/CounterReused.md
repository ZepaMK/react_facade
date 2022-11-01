```
const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return [count, increment, decrement];
};

const CounterWitHooksReused = () => {
  const [count1, increment1, decrement1] = useCounter(0);
  const [count2, increment2, decrement2] = useCounter(0);

   return (
    <div className="p-4">
      <h1 className="text-[1.2rem] mb-2 text-center">
        Counter reusing useState Hooks
      </h1>
      <ReactMarkdown children={content} />
      <p className="mb-4 text-center">
        <button className="border border-black p-2 mr-2" onClick={decrement1}>
          -
        </button>
        {count1}
        <button className="border border-black p-2 ml-2" onClick={increment1}>
          +
        </button>
      </p>
      <p className="text-center">
        <button className="border border-black p-2 mr-2 " onClick={decrement2}>
          -
        </button>
        {count2}
        <button className="border border-black p-2 ml-2" onClick={increment2}>
          +
        </button>
      </p>
    </div>
  );
};

export default CounterWitHooksReused;
```
