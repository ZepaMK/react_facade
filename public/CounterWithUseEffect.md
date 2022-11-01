```
const CounterWithUseEffect = () => {
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
     <div>
        <p className="border border-black p-4">count = {count}</p>
        <p className="border border-black mt-2 p-4">
          {count} x 2 = {calculation}
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="border border-black p-2 mt-4"
        >
          Increment
        </button>
      </div>
  );
};

export default CounterWithUseEffect;
```
