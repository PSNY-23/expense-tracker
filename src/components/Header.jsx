import { useState } from "react";
export default function Header({ handleExpense }) {
  const [name, setName] = useState("");
  const [spent, setSpent] = useState("");

  function handleClick() {
    handleExpense(name, spent);
    setName("");
    setSpent("");
  }
  return (
    <>
      <p>Made by devPankaj</p>
      <h1>Tracker App</h1>

      <input
        className="input-box"
        type="text"
        placeholder="Expense Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="input-box"
        type="number"
        placeholder="Money Spent"
        onChange={(e) => setSpent(Number(e.target.value))}
        value={spent}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
