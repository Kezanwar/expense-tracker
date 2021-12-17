import React from 'react'

function ExpenseChart(props) {

    // filter objects by state of year dropdown in expense filter

    const filteredObjects = props.expenses.filter(object =>
        object.date.toDateString().split(" ")[3] === props.filterDate);

    // sort by date helper function

    let monthAmounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    filteredObjects.forEach(object => {

        const monthArrayIndex = object.date.getMonth();

        monthAmounts[monthArrayIndex] = monthAmounts[monthArrayIndex] + object.amount;

    });

    console.log(monthAmounts);


    return (

        <div>

        </div>
    )
}

export default ExpenseChart
