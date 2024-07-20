export default function Table({ expenseObject }) {
  let totalSpent = expenseObject.reduce((total, item) => {
    total = total + item.spent;
    return total;
  }, 0);
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Spent</th>
        </tr>
        {expenseObject.map((items) => (
          <tr>
            <td>{items.name}</td>
            <td>{items.spent}</td>
          </tr>
        ))}
      </table>
      <h1>Total spent : {totalSpent} </h1>
    </>
  );
}
