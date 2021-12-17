import React from 'react'
import NewExpense from './NewExpense'
import NewExpenseTextbox from './NewExpenseTextbox'
import './NewExpense.css'

export default function NewExpenseTable(props) {

    return (
        <div className="new-expense__table">

            <NewExpenseTextbox />

            <NewExpense liftNewExpense={props.liftNewExpense} />
        </div>
    )
}
