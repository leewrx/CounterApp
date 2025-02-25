
import './App.css';
import { useState } from 'react';
function App() {



const [count, setCount] = useState(0);

const Increment = () => {
  setCount(count + 1);
}

const Decrement = () => {
setCount(count -1);
}


const Reset = () => {
  setCount(0);
}


  return (
    <div className="App">
      <label>{count}</label>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
