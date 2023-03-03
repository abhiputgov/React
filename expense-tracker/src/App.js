import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      expenseItemDate: new Date(2023, 2, 1),
      expenseItemTitle: `Car Insurance`,
      expenseItemPrice: '$200.00',
    },
    {
      expenseItemDate: new Date(2023, 2, 1),
      expenseItemTitle: `Bike Insurance`,
      expenseItemPrice: '$20.00',
    },
    {
      expenseItemDate: new Date(2023, 2, 1),
      expenseItemTitle: `Home Insurance`,
      expenseItemPrice: '$2000.00',
    },
    {
      expenseItemDate: new Date(2023, 2, 1),
      expenseItemTitle: `Life Insurance`,
      expenseItemPrice: '$2000.00',
    },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].expenseItemTitle}
        amount={expenses[0].expenseItemPrice}
        date={expenses[0].expenseItemDate}
      />
      <ExpenseItem
        title={expenses[1].expenseItemTitle}
        amount={expenses[1].expenseItemPrice}
        date={expenses[1].expenseItemDate}
      />
      <ExpenseItem
        title={expenses[2].expenseItemTitle}
        amount={expenses[2].expenseItemPrice}
        date={expenses[2].expenseItemDate}
      />
      <ExpenseItem
        title={expenses[3].expenseItemTitle}
        amount={expenses[3].expenseItemPrice}
        date={expenses[3].expenseItemDate}
      />
    </div>
  );
};

export default App;
