import React, { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/data";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    console.log(expense.date, date7DaysAgo);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No Expeneses regestered for the last 7 Days"
    />
  );
};

export default RecentExpenses;
