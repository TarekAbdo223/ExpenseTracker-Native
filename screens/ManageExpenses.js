import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenses = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  console.log(route, "route");

  const editedExpenseId = route.params?.expenseId;

  // if editedExpenseId is undefined so we trying to add a new one
  const isEditing = !!editedExpenseId; // this means to manage and make any value a Boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  function deleteExpenseHandler() {
    console.log("deleteee");
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "edit Test!!",
        amount: 55,
        date: new Date("2022-01-25"),
      });
    } else {
      expensesCtx.addExpense({
        description: "new Test!!",
        amount: 55,
        date: new Date("2024-12-28"),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 24,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
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
});
