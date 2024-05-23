import "./App.css";
import { useReducer, useState, UseState } from "react";
import { Button, Input } from "antd";

const action = (state, reducer) => {
  if (reducer.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (reducer.type === "DECREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
};

function App() {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(action, {
    count: 0,
    value: "",
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <div className="flex gap-[10px]">
        <Button type="primary" onClick={() => dispatch({ type: "IMCREMENT" })}>
          Plus
        </Button>
        {state.count}
        <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
          Minus
        </Button>
      </div>
      <div className="flex">
        <Input onChange={(e) => setValue(e.target.value)} type="text" />
        <h3>Value: {state.value}</h3>
      </div>
    </div>
  );
}

export default App;
