import { useReducer } from "react";

interface State {
  count: number
}

type ActionType = { type: 'reset' } |
{ type: 'setCount', value: State['count'] }

const initialState: State = { count: 0 }

function stateReducer(state: State, action: ActionType):State {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function ReducerHook() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  const addFive = () => dispatch({type:'setCount', value:state.count + 5});
  const reset = () => dispatch({type:'reset'});

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}