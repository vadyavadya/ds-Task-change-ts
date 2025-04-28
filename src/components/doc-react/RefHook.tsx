import { useEffect, useRef, useState } from "react";

function ModalMy({children, showModal}:{children:React.ReactNode, showModal:boolean}){
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(()=>{
    if (modalRef){
      if (showModal){
        modalRef.current?.showModal()
      } else {
        modalRef.current?.close()
      }
    }
  },[showModal])

  return (
  <dialog ref={modalRef}>
    {children}
  </dialog>
)
}

export default function RefHook() {
  const [show,setShow] = useState(false);

  function openModal(){
    setShow(true)
  }

  function closeModal(){
    setShow(false)
  }

  return (
    <div>
      <button onClick={openModal}>Открыть</button>
      <ModalMy showModal={show}>
        <div>Окно</div>
        <button onClick={closeModal}>Закрыть</button>
      </ModalMy>
    </div>
  )
}

