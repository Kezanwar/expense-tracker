import Expenses from './components/expenses/Expenses';
import ExpensesFilter from './components/expenseFilter/ExpensesFilter';
import NewExpenseTable from './components/newExpense/NewExpenseTable';
import ExpenseChart from './components/expenseChart/ExpenseChart';
import React, { useState } from 'react'

function App() {

  const [expenses, updateExpenses] = useState(() => {
    const expenseStorage = localStorage.getItem('expenses');
    if (expenseStorage === null) (console.log('null'));
    return expenseStorage !== null
      ? JSON.parse(expenseStorage)
      : [];
  });

  // const [expenses, updateExpenses] = useState([{
  //   title: 'Haircut',
  //   amount: 12.00,
  //   date: new Date(2020, 7, 14),
  //   id: 1234
  // },
  // {
  //   title: 'Chocolate',
  //   amount: 12.00,
  //   date: new Date(2021, 11, 13),
  //   id: 12345
  // },
  // {
  //   title: 'Chocolate',
  //   amount: 12.00,
  //   date: new Date(2021, 11, 15),
  //   id: 123456
  // }]);

  const [filterDate, setFilterDate] = useState('2022');

  const [chart, setChart] = useState(false)

  function liftNewExpense(newExpense) {
    updateExpenses((prev) => {
      localStorage.setItem('expenses', JSON.stringify([...prev, newExpense]));
      return [...prev, newExpense]
    });
  }

  const liftChartState = () => {
    setChart(prev => !prev);
  }

  return (

    <div>

      <NewExpenseTable liftNewExpense={liftNewExpense} />

      <ExpensesFilter chart={chart} liftChartState={liftChartState} expenses={expenses} filterDate={filterDate} setFilterDate={setFilterDate} />

      <ExpenseChart chart={chart} filterDate={filterDate} expenses={expenses} />

      <Expenses filterDate={filterDate} expenses={expenses} updateExpenses={updateExpenses} />

    </div>
  );
}

export default App;
