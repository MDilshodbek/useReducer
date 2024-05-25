import "./App.css";
import { useEffect, useReducer } from "react";
import { Button, Input } from "antd";

const action = (state, { type, payload }) => {
  switch (type) {
    case "DATA_CHANGE":
      return {
        ...state,
        data: payload.data,
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload.id),
      };
    case "CHANGE":
      return { ...state, value: payload.value };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(action, {
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      dispatch({ type: "DATA_CHANGE", payload: { data } });
    };
    getData();
  }, []);

  const onClick = async (id) => {
    dispatch({ type: "DELETE", payload: { id } });

    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      mathod: "DELETE",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      {state.data.map(({ id, title }) => (
        <div key={id}>
          {title}
          <Button type="primary" onClick={() => onClick(id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default App;

{
  /* <div className="flex gap-[10px]">
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
      </div> */
}

// case "INCREMENT":
//   return { ...state, count: state.count + 1 };
// case "DECREMENT":
//   return { ...state, count: state.count - 1 };
// case "CHANGE":
//   return { ...state, value: payload.value };

// default:
//   return state;

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
