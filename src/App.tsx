import { useState } from 'react';

import Calendar from "./components/Calendar/Calendar.tsx";

import './App.css';

/**
 * Days of the week
 */
export const days = [
  {
    name: "Sunday"
  },
  {
    name: "Monday"
  },
  {
    name: "Tuesday"
  },
  {
    name: "Wednesday"
  },
  {
    name: "Thursday"
  },
  {
    name: "Friday"
  },
  {
    name: "Saturday"
  },
];

// The following creates an array of numbers from [1..28]
const dates = Array.from({length: 28}, (_, i) => i + 1);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>React Calendar</h1>
      </header>
      <hr />
      <Calendar dates={dates} />
    </div>
  );
}

export default App;
