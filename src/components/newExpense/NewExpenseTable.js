import React from 'react'
import NewExpense from './NewExpense'
import NewExpenseTextbox from './NewExpenseTextbox'
import './NewExpense.css'

export default function NewExpenseTable(props) {

    return (
        <div className="new-expense__table">

            <NewExpenseTextbox />

            <NewExpense enteredTitle={props.enteredTitle} enteredAmount={props.enteredAmount} enteredDate={props.enteredDate} setEnteredTitle={props.setEnteredTitle} setEnteredAmount={props.setEnteredAmount} setEnteredDate={props.setEnteredDate} expenses={props.expenses} updateExpenses={props.updateExpenses} />

        </div>
    )
}
