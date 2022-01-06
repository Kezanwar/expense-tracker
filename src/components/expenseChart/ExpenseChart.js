import React from 'react'
import './ExpenseChart.css'
import ExpenseCalendar from './ExpenseCalendar'


function ExpenseChart(props) {

    if (props.chart === true) return (
        <div className='chartSection'>
            <ExpenseCalendar filterDate={props.filterDate} expenses={props.expenses} />
        </div>
    )

    else return (
        <div></div>
    )
}

export default ExpenseChart
