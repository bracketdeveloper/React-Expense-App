import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    function submitExpense(e) {
        e.preventDefault();
        if (title === "" || amount === "") return;

        let expense = {
            id: Date.now(),
            title: title,
            amount: parseFloat(amount),
        };

        addExpense(expense);
        setTitle("");
        setAmount("");
    }

    return (
        <div className="expense-form">
            <h2 className="expense-form__title">Add Expense</h2>

            <form className="expense-form__form" onSubmit={submitExpense}>
                <input
                    className="expense-form__input"
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="expense-form__input"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <button className="expense-form__button" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}