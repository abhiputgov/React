const ExpenseItemDate = (props) => {
  return (
    <div>
      <div>{props.date.toLocaleString('en-us', { month: 'long' })}</div>
      <div>{props.date.toLocaleString('en-us', { day: '2-digit' })}</div>
      <div>{props.date.toLocaleString('en-us', { year: 'numeric' })}</div>
    </div>
  );
};

export default ExpenseItemDate;
