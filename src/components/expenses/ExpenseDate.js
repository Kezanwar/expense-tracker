

function ExpenseDate(props) {


    return (

        <div className="expense-item__date">
            <h2 className="month">{props.month}</h2>
            <h2 className="number">{props.number}</h2>
            <h2>{props.year}</h2>

        </div>

    )
}

export default ExpenseDate;