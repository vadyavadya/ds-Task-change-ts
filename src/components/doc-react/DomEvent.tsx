import { useState } from "react"

export default function DomEvent() {
  const [text, setText] = useState('');

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={changeText} value={text} />
      <p>Value: {text}</p>
      <p><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts">типы в React</a></p>

    </div>
  )
}