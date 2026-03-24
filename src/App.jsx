import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import {useEffect, useState} from "react";
import "./App.css"
function App() {
    const [expenses, setExpenses] = useState(()=>{
        const saved = localStorage.getItem("expenses")
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    },[expenses])

    function addExpense(expense) {
        setExpenses((prev) => [...prev, expense]);
    }

    function deleteExpense(id) {
        setExpenses((prev) => prev.filter((e) => e.id !== id));
    }

    return (
        <div className="app">
            <div className="app__container">
                <ExpenseForm addExpense={addExpense} />
                <ExpenseList
                    expenses={expenses}
                    deleteExpense={deleteExpense}
                />
            </div>
        </div>
    );
}

export default App;