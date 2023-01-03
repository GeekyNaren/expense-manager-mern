import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    date: "",
  });

  function handleInput(e) {
    // console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(form);
    const res = await fetch('http://localhost:4000/transaction', {
      method:'POST',
      body: form,
    });
    console.log(res);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          value={form.desciption}
          onChange={handleInput}
          placeholder="Enter transaction detail"
        />
        <input
          type="date"
          name="date"
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
