import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  // useEffect(() => {
  //   document.getElementById('result').value = '';
  // });

  useEffect(() => {
    if (clear) document.getElementById('result').value = '';
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.getElementById('num').value;
    if (currentNum == '') return;
    let sum = currentSum + parseInt(currentNum);
    setCurrentSum(sum);
    document.getElementById('num').value = '';
  };

  const Subtract = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.getElementById('num').value;
    if (currentNum == '') return;
    let sum = currentSum - parseInt(currentNum);
    setCurrentSum(sum);
    document.getElementById('num').value = '';
  };

  const Clear = (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  };

  return (
    <div className="app">
      <div className="app-title">
        <h1>Simple Calculator</h1>
      </div>
      <form>
        <input type="text" id="num" placeholder="enter a number" />
        <br />
        <input type="text" id="result" value={currentSum} readOnly />
        <br />
        <button onClick={Add}>+</button>
        <button onClick={Subtract}>-</button>
        <button onClick={Clear}>Clr</button>
      </form>
    </div>
  );
}

export default App;
