import axios from "axios";

export function storeExpense(expenseData) {
  console.log("fetchinddddd", expenseData);

  axios.post(
    "https://expense-native-1ed53-default-rtdb.firebaseio.com/expense.json",
    expenseData // firebase creates a random unique id
  );
}
