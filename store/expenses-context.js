import React, { createContext, useReducer, useState } from "react";

// Create a Context
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      // const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload); // because if equal so this is the item that i want to delete

    case "UPDATE_EXPENSE":
      //   return {
      //     expenses: state.expenses.map((expense) =>
      //       expense.id === action.id ? { ...expense, ...action.expense } : expense
      //     ),
      //   };
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

// Create a Provider component
//expensesState the state that will be managed by the switch statment
export const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expenseDate) {
    dispatch({ type: "ADD_EXPENSE", payload: expenseDate });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: { id: id, data: expenseData },
    });
  }

  const value = {
    expenses: expensesState,
    // keep in mind that expensesState is the one that change whenever the state changes => this is the new one***
    setExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
