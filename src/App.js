import './App.css';
import { useState } from 'react';
import Result from './components/Result';
import { useSelector } from 'react-redux';

function App() {
  const {total} = useSelector((state) => state)

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMin = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <button onClick={handleMin}>-</button>
      <button onClick={handleAdd}>+</button>
      <h1>{count}</h1>
      <Result />
    </div>
  );
}

export default App;
