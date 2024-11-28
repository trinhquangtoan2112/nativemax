import { Text } from "react-native";
import ExpenseOutput from "../components/expenseoutput/ExpenseOutput";

function RecentExpenses() {
  return <ExpenseOutput expensesPeriodName="Last 7 days"></ExpenseOutput>;
}

export default RecentExpenses;
