import { useState } from 'react'
import './App.css'

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [si, setSi] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const si = (principle * rate * time) / 100;
    setSi(si);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setPrinciple(0);
    setRate(0);
    setTime(0);
    setSi(0);
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-4">Simple Interest Calculator</h2>
        <p className="text-center text-gray-600 mb-8">Calculate your simple interest easily.</p>

        <div className="flex flex-col justify-center items-center bg-indigo-50 p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-4xl font-bold text-indigo-600">₹{si.toFixed(2)}</h3>
          <h5 className="text-lg text-gray-500 mt-2">Total Simple Interest</h5>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the principal amount"
              value={principle===0 ? '': principle}
              onChange={(e) => setPrinciple(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <input
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the rate"
              value={rate ===0 ? '' : rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <input
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the time"
              value={time ===0 ? '' : time}
              onChange={(e) => setTime(parseFloat(e.target.value))}
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
            <button
              onClick={handleReset}
              className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
