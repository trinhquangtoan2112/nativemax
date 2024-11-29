import { Text } from "react-native";
import ExpenseOutput from "../components/expenseoutput/ExpenseOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/Expense-context";

function AllExpenses() {
  const expenseCTX = useContext(ExpensesContext);

  return (
    <ExpenseOutput
      expenses={expenseCTX.expenses}
      expensesPeriodName="Total"
      fallbackText="No expenses "
    ></ExpenseOutput>
  );
}

export default AllExpenses;
