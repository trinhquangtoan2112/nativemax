import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../constant/color";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ description, amount, date, id }) {
  const nav = useNavigation();
  const expensePressHandle = () => {
    nav.navigate("ManageExpress", { expensesID: id });
  };
  return (
    <Pressable
      onPress={expensePressHandle}
      style={({ pressed }) => {
        return pressed && styles.pressed;
      }}
      android_ripple={{ color: "rgba(0, 0, 0, 0.2)" }}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyle.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyle.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyle.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyle.colors.primary500,
    fontWeight: "bold",
  },
});
