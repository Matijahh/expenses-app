import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../filterExpense/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenses = props.expenses;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
