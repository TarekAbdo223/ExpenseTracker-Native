import React, { createContext, useReducer, useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pare of shoes",
    amount: 59.99,
    date: new Date("2024-12-25"),
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

// Create a Context
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseDate) {
    dispatch({ type: "ADD_EXPENSE", payload: expenseDate });
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
