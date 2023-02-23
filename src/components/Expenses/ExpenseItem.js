import { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

  // naming convention:
  // [name to describe current value, mutator / updater]
  const [title, setTitle] = useState(props.title);
  // hook always returns an array with two elements
  // useState(defaultValue);

  const clickHandler = () => {
    setTitle('Updated.')
    console.log('test')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem
