import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../constant/color";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item}></ExpenseItem>;
}
export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
