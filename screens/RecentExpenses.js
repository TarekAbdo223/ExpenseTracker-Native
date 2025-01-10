import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/data";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  //   const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      //   setFetchedExpenses(expenses);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  //   const recentExpenses = expensesCtx.expenses.filter((expense) => {
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
