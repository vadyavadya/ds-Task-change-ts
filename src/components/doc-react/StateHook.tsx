
// * use union
// type Status = "idle" | "loading" | "success" | "error";

import { useState } from "react"

// const [status, setStatus] = useState<Status>("idle");


// * 2 variant
// type RequestState =
//   | { status: 'idle' }
//   | { status: 'loading' }
//   | { status: 'success', data: any }
//   | { status: 'error', error: Error };

// const [requestState, setRequestState] = useState<RequestState>({ status: 'idle' });
// -----------------------------------------------------

export default function StateHook() {
  const [count, setCount] = useState<number>(5)

  function increase (){
    setCount((c)=> c + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+1</button>
    </div>
  )
}