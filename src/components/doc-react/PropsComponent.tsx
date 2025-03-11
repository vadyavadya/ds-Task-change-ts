interface ButtonProps {
  title:string,
  disable:boolean,
}

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>
}

function MyButton2({title, disable}:ButtonProps){
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

