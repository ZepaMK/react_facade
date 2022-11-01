import CounterWithHooks from "../components/useState/CounterWithHooks";
import CounterWitHooksReused from "../components/useState/CounterWithHooksReused";
import CounterWithoutHooks from "../components/useState/CounterWithoutHooks";
import CounterWithUseEffect from "../components/useEffect/CounterWithUseEffect";
import CounterWithoutUseEffect from "../components/useEffect/CounterWithoutUseEffect";

export default function Hooks() {
  return (
    <div>
      <div className="py-4 px-16">
        <h1 className="text-[1.5rem] font-semibold">useState()</h1>
        <div className="h-[1px] bg-black w-full" />
        <p className="w-1/2 italic">
          This section contains a example of a old class component, a useState()
          component and a example on how useState() can be reusable. The output
          of these code snippets are the same, namely counters, but the code
          written is different. We can conclude that useState components use
          less code and are easier to reuse.
        </p>
      </div>
      <div className="flex justify-evenly flex-col md:flex-row">
        <CounterWithoutHooks />
        <CounterWithHooks />
        <CounterWitHooksReused />
      </div>
      <div className="py-4 px-16">
        <h1 className="text-[1.5rem] font-semibold">useEffect()</h1>
        <div className="h-[1px] bg-black w-full" />
        <p className="w-1/2 italic">
          This section contains a example of a old class component without using
          UseEffect() and a example using UseEffect(). The result of these code
          snippets are the same, namely a counter and calculator, but the code
          written is different. We can conclude that UseEffect components use
          less code and can implement complex logic easier.
        </p>
        <div className="flex justify-evenly flex-col md:flex-row">
          <CounterWithUseEffect />
          <CounterWithoutUseEffect />
        </div>
      </div>
    </div>
  );
}
