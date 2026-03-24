export default function ExpenseItem({ expenses, deleteExpense }) {
    return (
        <>
            {expenses.map((e) => (
                <tr className="expense-item" key={e.id}>
                    <td className="expense-item__title">{e.title}</td>
                    <td className="expense-item__amount">${e.amount}</td>
                    <td>
                        <button
                            className="expense-item__delete"
                            onClick={() => deleteExpense(e.id)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}