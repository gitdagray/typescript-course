import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react' 

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number 

const fib: fibFunc = (n) => {
  if (n < 2) return n 
  return fib(n - 1) + fib(n - 2) 
}

const myNum: number = 37 

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current) 
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void  => setCount(prev => prev + 2),[])

  const result = useMemo<number>(() => fib(myNum),[myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
