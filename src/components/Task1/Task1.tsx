import { useState } from "react"

interface propsTask1  {
  title: string,
  initialState: number,
}

export const Task1: React.FC<propsTask1> = ({ title, initialState }) => {
const [count, setCount] = useState<number>(initialState);

  return (
    <div>
      <h1>{title}</h1>
      <div className="">{count}</div> 
      <div className=""><button onClick={()=>setCount(count+1)}>Increase</button></div> 
    </div>
  )
}