import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
function Expenses() {
    const expenses = [
        { id: 'e1', title: 'Shampoo', amount: 10, date: new Date(2021, 2, 28),},
        { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 1),},
        { id: 'e3', title: 'Movies', amount: 25, date: new Date(2021, 4, 5),},
        { id: 'e4', title: 'Rent', amount: 1000, date: new Date(2021, 2, 24),}
      ]
      return (
        <div>
          <h2>Let's get started!</h2>
          <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
          <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        </div>
      );
}

export default Expenses;