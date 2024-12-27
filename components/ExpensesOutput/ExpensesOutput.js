import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pare of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pare of trousers",
    amount: 98.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e3",
    description: "biscoutes",
    amount: 9.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-02-19"),
  },
  {
    id: "e5",
    description: "A pare of trousers",
    amount: 98.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e6",
    description: "biscoutes",
    amount: 9.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-02-19"),
  },
  {
    id: "e8",
    description: "A pare of trousers",
    amount: 98.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e9",
    description: "biscoutes",
    amount: 9.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 19.99,
    date: new Date("2021-02-19"),
  },
];

const ExpensesOutput = ({ expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
