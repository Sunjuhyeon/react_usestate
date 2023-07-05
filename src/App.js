import Return from "./Return";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0) //useState로부터 관리받는 변수
  let count2 = 0 //그냥 변수
  //특정 컴포넌트를 새로고침
  return (
    <>
      <button onClick={() => {setCount((count + 1) % 3)}}>{count}</button>

      <button onClick={() => {count2++; 
                              count2 %= 3;
                              console.log(count2)}}>{count2}</button>
    </>
  )
}

export default App;
