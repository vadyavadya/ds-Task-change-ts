import { useEffect, useState } from "react"

interface SizeType {
  width: number,
  height: number
}

export default function Home() {

  const [size, setSize] = useState<SizeType | null>(null);

  function setWindowSize() {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  useEffect(() => {
    console.log('подписка');

    setWindowSize();

    function resize() {
      setWindowSize();
    }

    window.addEventListener('resize', resize)

    return () => {
      console.log('отписка');
      window.removeEventListener('resize', resize);
    }
  }, [])

  if (!size) {
    return <h1>Home</h1>
  }

  return (
    <div>
      Home ширина: {size.width}, высота:{size.height}
    </div>
  )
}