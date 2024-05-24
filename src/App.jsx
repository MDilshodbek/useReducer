import "./App.css";
import { useReducer } from "react";
import { Button, Input } from "antd";

const action = (state, { type, payload }) => {
  // if (reducer.type === "INCREMENT") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (reducer.type === "DECREMENT") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (reducer.type === "CHANGE") {
  //   return {
  //     ...state,
  //     value: reducer.payload.value,
  //   };
  // }
  // return state;

  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "CHANGE":
      return { ...state, value: payload.value };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(action, {
    count: 0,
    value: "",
  });

  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <div className="flex gap-[10px]">
        <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
          Plus
        </Button>
        {state.count}
        <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
          Minus
        </Button>
      </div>
      <div className="flex">
        <Input
          onChange={(e) =>
            dispatch({ type: "CHANGE", payload: { value: e.target.value } })
          }
          type="text"
        />
        <h3>Value: {state.value}</h3>
      </div>
    </div>
  );
}

export default App;
