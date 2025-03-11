import { useState } from "react"

export const Task2: React.FC = () => {
  const [input,setInput] = useState<string>('');

  function handleInput(event:React.ChangeEvent<HTMLInputElement>){
    setInput(event.target.value)
  }

  return (
    <>
      <h1>Task2</h1>
      <input type="text" value={input} onChange={handleInput}/>
      <p>{input}</p>
    </>

  )
}