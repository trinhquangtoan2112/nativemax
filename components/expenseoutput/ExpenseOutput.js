import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { GlobalStyle } from "../../constant/color";

export default function ExpenseOutput({
  expenses,
  expensesPeriodName,
  fallbackText,
}) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary
        expenses={expenses}
        periodName={expensesPeriodName}
      ></ExpenseSummary>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
