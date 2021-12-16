import React from 'react'
import './NewExpense.css'
import './NewExpenseAnimations.css'



function NewExpenseTextbox() {
    return (
        <div className="new-expense__textbox">
            <div className="new-expense__textbox__toptext">
                <h2 className="text-gradient">Expense Tracker.</h2>
                <p>A ReactJS App for tracking your monthly expenses, by <a className="link-gradient" href="www.github.com/kezanwar" target="_blank" >Kez Anwar.</a></p>
                {/* Need to break icons into own component for chaining to user input timeline */}
                <div className="icons"><i className="fas fa-hand-holding-usd icon"></i><i className="fas fa-donate icon"></i><i className="fas fa-piggy-bank icon"></i><i className="fas fa-long-arrow-alt-right icon"></i></div>
            </div>
            <div className="new-expense__textbox__bottomtext" >
                Expenditure is an outflow of money, or any form of fortune in general, to another person or group as payment for an item, service, or other category of costs. For a tenant, rent is an expense. For students or parents, tuition is an expense.
                Buying food, clothing, furniture or an automobile is often referred to as an expense. An expense is a cost that is "paid" or "remitted", usually in exchange for something of value. Something that seems to cost a great deal is "expensive". Something that seems to cost little is "inexpensive". "Expenses of the table" are expenses of dining, refreshments, a feast, etc.
            </div>

        </div>
    )
}

export default NewExpenseTextbox
