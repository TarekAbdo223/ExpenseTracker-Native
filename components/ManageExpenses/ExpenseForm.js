import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

const ExpenseForm = ({ isEditing, onCancel, onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  }); // the value on any input will be always string alwaysssssss

  function inputChangeHandler(inputIdentifier, enteredAmount) {
    setInputValues((currInputValues) => {
      return {
        ...currInputValues,
        [inputIdentifier]: enteredAmount,
      };
    });
  }

  function submitHandler() {
    // submit the form
    console.log("Submitting form", inputValues);
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYY-MM-DD",
            maxLenght: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.data,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
    color: "white",
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
