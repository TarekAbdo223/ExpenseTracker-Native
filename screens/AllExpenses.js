import React, { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expensesPeriod="total"
      expenses={expensesCtx.expenses}
      fallbackText="No Expeneses found"
    />
  );
};

export default AllExpenses;
