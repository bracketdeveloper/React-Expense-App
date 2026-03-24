# Expense Tracker App

A simple React app to track your daily expenses.

You can add expenses, view them in a list, and remove them when needed.
The app also calculates the total amount automatically.

---

## Features

* Add expense with title and amount
* View all expenses in a table
* Delete any expense
* Real-time total calculation
* Clean and responsive UI

---

## Tech Stack

* React (useState)
* JavaScript
* CSS (custom styling)

---

## Project Structure

```
src/
│
├── components/
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   └── ExpenseItem.jsx
│
├── App.jsx
└── index.js
```

---

## How It Works

* You enter a title and amount
* The app stores the expense in state
* The list updates instantly
* Total updates automatically
* You can remove any item with one click

---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/expense-tracker.git
```

Go to the project folder:

```
cd expense-tracker
```

Install dependencies:

```
npm install
```

Run the app:

```
npm run dev
```

---

## Usage

* Enter expense title
* Enter amount
* Click "Add"
* View it in the list
* Click "Remove" to delete

---

## Future Improvements

* Edit existing expenses
* Add categories
* Save data in localStorage
* Add charts for insights

---

## Questions to Think About

* How will you persist data after refresh?
* Do you want to track monthly budgets?
* Should users filter expenses by category?

---

## License

This project is open source and free to use.
