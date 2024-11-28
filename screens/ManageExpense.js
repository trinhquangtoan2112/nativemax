import { StyleSheet, Text } from "react-native";
import { GlobalStyle } from "../constant/color";
import { useLayoutEffect } from "react";

function ManageExpense({ navigation, route }) {
  const editedExpenseId = route.params?.expensesID;
  const idEdited = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: idEdited ? "Edit Expenses" : "Add Expenses",
    });
  }, [idEdited, navigation]);
  return <Text>ManageExpense Screen</Text>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyle.colors.primary200,
    alignItems: "center",
  },
});
export default ManageExpense;
