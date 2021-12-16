

import Expenses from './components/expenses/Expenses';
import ExpensesFilter from './components/expenseFilter/ExpensesFilter';
import NewExpenseTable from './components/newExpense/NewExpenseTable';
import React, { useState } from 'react'


function App() {


  const [filteredAmount, setFilteredAmount] = useState(0.00)

  function liftingFilteredObjects(filteredObjects) {

    function simpleArraySum(ar) {
      var sum = 0;
      for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
      }
      return sum;
    }

    const arr = filteredObjects.map(obj => obj.amount);

    console.log(simpleArraySum(arr));

    setFilteredAmount(simpleArraySum(arr));

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

  // const [expenses, updateExpenses] = useState([]);

  // inputStates

  const [enteredTitle, setEnteredTitle] = useState('')

  const [enteredAmount, setEnteredAmount] = useState('')

  const [enteredDate, setEnteredDate] = useState('')


  // filter state

  const [filterDate, setFilterDate] = useState('2021');


  return (

    <div>

      <NewExpenseTable enteredTitle={enteredTitle} enteredAmount={enteredAmount} enteredDate={enteredDate} setEnteredTitle={setEnteredTitle} setEnteredAmount={setEnteredAmount} setEnteredDate={setEnteredDate} expenses={expenses} updateExpenses={updateExpenses} />

      <ExpensesFilter filteredAmount={filteredAmount} filterDate={filterDate} setFilterDate={setFilterDate} />

      <Expenses liftingFilteredObjects={liftingFilteredObjects} filterDate={filterDate} expenses={expenses} updateExpenses={updateExpenses} />

    </div>
  );
}

export default App;
