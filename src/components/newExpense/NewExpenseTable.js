import React from 'react'
import NewExpense from './NewExpense'
import NewEpxenseTextbox from './NewEpxenseTextbox'
import './NewExpense.css'

export default function NewExpenseTable(props) {

    return (
        <div className="new-expense__table">

            <NewEpxenseTextbox />

            <NewExpense enteredTitle={props.enteredTitle} enteredAmount={props.enteredAmount} enteredDate={props.enteredDate} setEnteredTitle={props.setEnteredTitle} setEnteredAmount={props.setEnteredAmount} setEnteredDate={props.setEnteredDate} expenses={props.expenses} updateExpenses={props.updateExpenses} />

        </div>
    )
}
