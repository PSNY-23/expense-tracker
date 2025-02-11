import React, { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./styles.css";

export default function App() {
  const [expenseObject, setExpenseObject] = useState([]);
  function handleExpense(name, spent) {
    const newExpense = { name, spent }
    setExpenseObject([...expenseObject, newExpense]);
  }
  return (
    <>
      <Header handleExpense={handleExpense} />
      <Table expenseObject={expenseObject} />
    </>
  );
}
