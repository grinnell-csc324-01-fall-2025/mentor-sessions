import { useState } from 'react';
import './App.css';
import axios from 'axios';
import ListDisplay from './components/ListDisplay';

const BASE_URL = "http://localhost:3001";

function App() {
  const [list, setList] = useState<Array<number | string>>([]);
  const [formValue, setFormValue] = useState(20);

  /**
   * Get next fizzBuzz value from the backend
   */
  const getNext = async () => {
    try {
      const res = await axios.get(BASE_URL + "/fizzbuzz/next");
      console.log(res.data)
      setList([...list, res.data.next]);
    } catch {
      alert("No more values");
    }
  }
  
  /**
   * Requests the backend to reset
   */
  const reset = async () => {
    setList([]);
    await axios.post(BASE_URL + "/fizzbuzz/reset");
    console.log("Reset")
  }

  /**
   * Reset fizzBuzz and set upper bound to value specified in form.
   */
  const setMaximum = async (formData: FormData) => {
    try {
      setList([]);
      await axios.post(BASE_URL + "/fizzbuzz/reset-max/" + formData.get("max"));
      console.log("Set maximum to " + formData.get("max"));
    } catch {
      alert("Invalid input")
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(parseInt(e.target.value))
  }

  return (
    <div>
      <p>
        <button id="get-next" onClick={getNext}>Get next</button>
        <button id="reset" onClick={reset}>Reset</button>
      </p>
      <form action={setMaximum}>
        <label>
          Set new maximum:
          <input
            name="max"
            type="number"
            value={formValue}
            onChange={handleChange}
            id="input-max"
          />
        </label>
        <button type="submit">Confirm</button>
      </form>
      <ListDisplay id="fizzbuzz-list-display" sourceList={list} />
    </div>
  )
}

export default App
