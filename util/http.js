import axios from "axios";

const BACKEND_URL = "https://expense-native-1ed53-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  console.log("fetchinddddd", expenseData);

  const response = await axios.post(
    BACKEND_URL + "/expense.json",
    expenseData // firebase creates a random unique id
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expense.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date), // Convert to Date object
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expense/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expense/${id}.json`);
}
