import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../constant/color";
import { useContext, useLayoutEffect } from "react";
import Icon from "../UI/Icon";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/Expense-context";
import ExpensesForm from "../components/manageexpenses/ExpensesForm";

function ManageExpense({ navigation, route }) {
  const functionContext = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expensesID;
  const isEdited = !!editedExpenseId;
  const selectedExpense = functionContext.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? "Edit Expenses" : "Add Expenses",
    });
  }, [isEdited, navigation]);

  const deleteExpenseHandle = () => {
    navigation.goBack();
    functionContext.deleteExpense(editedExpenseId);
  };
  const confirmHandle = () => {
    if (isEdited) {
      functionContext.editExpenses(editedExpenseId, {
        description: "412212",
        amount: 19.9,
        date: new Date("2024-3-14"),
      });
      navigation.goBack();
      return;
    }
    functionContext.addExpense({
      description: "aaaaaaaa",
      amount: 19.9,
      date: new Date("28-11-2024"),
    });
    navigation.goBack();
    return;
  };

  function cancelHandle() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEdited) {
      functionContext.editExpenses(editedExpenseId, expenseData);
    } else {
      functionContext.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        submitButtonLabel={isEdited ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandle}
        defaultValues={selectedExpense}
      ></ExpensesForm>

      {isEdited && (
        <View style={styles.deleteContainer}>
          <Icon
            name="trash"
            color={GlobalStyle.colors.error500}
            size={24}
            onPress={deleteExpenseHandle}
          ></Icon>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary800,
  },
  buttons: {
    width: "100%",
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
