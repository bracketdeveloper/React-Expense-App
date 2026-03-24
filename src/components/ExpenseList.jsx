import ExpenseItem from "./ExpenseItem.jsx";

export default function ExpenseList({ expenses, deleteExpense }) {
    const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="expense-list">
            <h3 className="expense-list__total">
                Total: ${totalExpense.toFixed(2)}
            </h3>

            {expenses.length === 0 ? (
                <p className="expense-list__empty">No expenses yet</p>
            ) : (
                <table className="expense-list__table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    <ExpenseItem
                        expenses={expenses}
                        deleteExpense={deleteExpense}
                    />
                    </tbody>
                </table>
            )}
        </div>
    );
}