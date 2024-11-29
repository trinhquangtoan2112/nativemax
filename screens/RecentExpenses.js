import { Text } from "react-native";
import ExpenseOutput from "../components/expenseoutput/ExpenseOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/Expense-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expenseCTX = useContext(ExpensesContext);

  return (
    <ExpenseOutput
      expenses={expenseCTX.expenses.filter((expenseCTX) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expenseCTX.date > date7DaysAgo;
      })}
      expensesPeriodName="Last 7 days"
      fallbackText="No expenses for the last 7 days"
    ></ExpenseOutput>
  );
}

export default RecentExpenses;
