interface ButtonProps {
  title: string,
  disable: boolean,
}

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>
}

function MyButton2({ title, disable }: ButtonProps) {
  return <button disabled={disable}>{title}</button>
}


export default function PropsComponent() {
  return (
    <div>
      <MyButton title="i'am Button" />
      <MyButton2 title="i'am Button disable" disable={true} />
    </div>
  )
}

/* type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  // * Тип массива!
  names: string[];
  // * строковые литералы для указания точных строковых значений с типом объединения, соединяющим их вместе
  status: "waiting" | "success";
  // * объект с известными свойствами (но может иметь больше во время выполнения)
  obj: {
    id: string;
    title: string;
  };
  // * множество объектов! (распространенный)
  objArr: {
    id: string;
    title: string;
  }[];
  // * любое непримитивное значение - невозможно получить доступ к каким-либо свойствам (НЕ РАСПРОСТРАНЕННЫй, но     полезным в качестве  заполнителя)
  obj2: object;
  // * интерфейс без обязательных свойств - (ВСТРЕЧАЕТСЯ РЕДКО, за исключением таких вещей, как `React.Component<  {},   State>`)
  obj3: {};
  // * объект dict с любым количеством свойств одного и того же типа
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // эквивалент dict1
  // * функция, которая ничего не принимает и не возвращает (ОЧЕНЬ РАСПРОСТРАНЕННАЯ)
  onClick: () => void;
  // * функция с именованным реквизитом (ОЧЕНЬ РАСПРОСТРАНЕННАЯ)
  onChange: (id: number) => void;
  // * синтаксис типа функции, который принимает событие (ОЧЕНЬ РАСПРОСТРАНЕННЫЙ)
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // * альтернативный синтаксис типа функции, который принимает событие (ОЧЕНЬ РАСПРОСТРАНЕННЫЙ)
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  // * любая функция до тех пор, пока вы ее не вызовете (не рекомендуется)
  onSomething: Function;
  // * дополнительный реквизит (ОЧЕНЬ РАСПРОСТРАНЕННЫЙ!)
  optional?: OptionalType;
  // * при передаче функции установки состояния, возвращаемой `useState` дочернему компоненту. например, `number` замените на любой тип вашего  состояния
  setState: React.Dispatch<React.SetStateAction<number>>
} */

/* export declare interface AppProps {
  // отлично, принимает все, что может отобразить React
  children?: React.ReactNode;
  // Один элемент React
  childrenElement: React.JSX.Element;
  // передача стилей
  style?: React.CSSProperties;
  // события формы! общий параметр с типом event.target
  onChange?: React.FormEventHandler<HTMLInputElement>;
  // more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  // олицетворять все реквизиты элемента button и явно не пересылать его ссылку
  props: Props & React.ComponentPropsWithoutRef<"button">;
  // олицетворять все реквизиты MyButtonForwardedRef и явно пересылать его ссылку
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>;
} */