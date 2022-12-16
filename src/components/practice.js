import './App.css';
import React, { useEffect,useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function changeCount(amount) {
    setCount(prevCount => prevCount + amount)
  }
  useEffect(() => {
    console.log("useEffect has been called!", count);
  });
function resetCount(amount){
  setCount(0)
}
// const [button, setButton] = useState("");

//   //useEffect hook
//   useEffect(() => {
//     console.log("useEffect has been called!", button);
//   });

//   const onYesPress = () => {
//     setButton("Yes");
//   };

//   const onNoPress = () => {
//     setButton("No");
//   };
// const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`You have clicked the first button ${count} times`);
//   }, [count]);

//   const [count2, setCount2] = useState(0);
//   const onYesPress = () => {
//     setCount2(0);
//   };
//   // useEffect(() => {
//   //   console.log(`You have clicked the second button ${count2} times`)
//   // }, [count2]);
// useEffect(()=>{
//   console.log(`you have pushed  second ${count2} times`)
// },[count2]);
// useEffect(()=>{
//   console.log(`you have pushed  second ${count2} times`)
// },[setCount2]);
  return (
    <>
      <span>{count}</span>
      <button onClick={()=>changeCount(+1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>

    // <>
    //     <button onClick={() => this.onYesPress()}>Yes</button>
    //     <button onClick={() => this.onNoPress()}>No</button>
    //   </>
    // <div>
    //   <button onClick={() => setCount(count + 1)}>Click me</button>
    //   <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    //   <button onClick={() => setCount2(0)}>Click resetcount</button>
    // </div>
  );
}

export default App;
