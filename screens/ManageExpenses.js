import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const ManageExpenses = ({ route, navigation }) => {
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
  }

  return (
    <View>
      {isEditing && (
        <IconButton
          icon="trash"
          size={36}
          color={GlobalStyles.colors.error500}
          onPress={deleteExpenseHandler}
        />
      )}
    </View>
  );
};

export default ManageExpenses;
