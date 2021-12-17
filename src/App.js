import Expenses from './components/expenses/Expenses';
import ExpensesFilter from './components/expenseFilter/ExpensesFilter';
import NewExpenseTable from './components/newExpense/NewExpenseTable';
import ExpenseChart from './components/expenseChart/ExpenseChart';
import React, { useState } from 'react'

function App() {


  function liftNewExpense(newExpense) {

    updateExpenses((prev) => {
      return [...prev, newExpense]
    });

  }

  // expenses state

  const [expenses, updateExpenses] = useState([{
    title: 'Haircut',
    amount: 12.00,
    date: new Date(2020, 7, 14),
    id: 1234
  },
  {
    title: 'Chocolate',
    amount: 12.00,
    date: new Date(2021, 11, 13),
    id: 12345
  },
  {
    title: 'Chocolate',
    amount: 12.00,
    date: new Date(2021, 11, 15),
    id: 123456
  }]);


  const [filterDate, setFilterDate] = useState('2021');

  return (

    <div>

      <NewExpenseTable liftNewExpense={liftNewExpense} />

      <ExpensesFilter expenses={expenses} filterDate={filterDate} setFilterDate={setFilterDate} />

      <ExpenseChart filterDate={filterDate} expenses={expenses} />

      <Expenses filterDate={filterDate} expenses={expenses} updateExpenses={updateExpenses} />

    </div>
  );
}

export default App;
