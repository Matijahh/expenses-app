import "./ExpenseForm.css";
import "./NewExpense.css";

const AddNewExpense = (props) => {
  return (
    <form className="new-expense">
      <div className="add-new-expense__actions">
        <button onClick={props.onAddNewExpenseClick}>Add New Expense</button>
      </div>
    </form>
  );
};

export default AddNewExpense;
