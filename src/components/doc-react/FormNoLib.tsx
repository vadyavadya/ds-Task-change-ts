import { useRef, useState } from "react";

let id = 0;

interface MessageType {
  id: number,
  message: string
}

export default function FormNoLib() {

  return (
    <div>
      <h2>Формы</h2>
      <InputFocusEvent />
      <br />
      <InlineEvent />
      <SyntheticEventApproved />
    </div>
  )
}


// * Указание событя при помощи IDE если оно подсказывает например фокуса
function InputFocusEvent() {

  const [messages, setMessages] = useState<MessageType[]>([]);

  function addMessage(text: string) {
    setMessages([...messages, { id: id++, message: text }])
  }

  //* тип события React.FocusEventHandler
  const inputOnFocus: React.FocusEventHandler = (e) => {
    addMessage(e.target.id + ' focus');
  }

  const inputOnBlur: React.FocusEventHandler = (e) => {
    addMessage(e.target.id + ' blur');
  }

  return (
    <div>
      <input type="text" id="input1" name="input_name" onFocus={inputOnFocus} onBlur={inputOnBlur} />
      {
        messages.length > 0 && (
          <ul>
            {messages.map(mes => <li key={mes.id}>{mes.message}</li>)}
          </ul>
        )
      }
    </div>
  );
}

// * Данная реализация работает медленно, но автоматическое определение типа
function InlineEvent() {
  const [countClickButton, setCountClickButton] = useState(0)

  return (
    <button
      onClick={(event) => {
        /* событие будет правильно введено автоматически! */
        setCountClickButton(event.detail);
      }}
    >
      {countClickButton < 1 ? "Кнопка" : `Количество быстрых нажатий: ${countClickButton}`}
    </button>
  );;
}


// третий вариант определния типов если не особо волнует тип события 
// можно использовать React.SyntheticEvent
function SyntheticEventApproved() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      ref={formRef}
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();

        // * для проверки пользователя можно использовать такие утверждения
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!

      }}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
    </form>
  );
}