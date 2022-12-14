import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { GoalInput, GoalItem } from "./components";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showAddModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeAddModalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      closeAddModalHandler();
    }
  };

  const removeGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainter}>
        <View style={styles.modalButtonContainer}>
          <Button
            onPress={showAddModalHandler}
            title="Add New Goal"
            color="#472183"
          />
        </View>
        <GoalInput
          isVisible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={closeAddModalHandler}
        />
        <View style={styles.goalsContainer}>
          {courseGoals.length > 0 ? (
            <FlatList
              data={courseGoals}
              keyExtractor={(_, index) => `goal-${index}`}
              renderItem={(itemData) => (
                <GoalItem
                  data={itemData.item}
                  onRemoveItem={removeGoalHandler}
                />
              )}
            />
          ) : (
            <Text style={styles.defaultGoalText}>
              You still dont'have any goals.
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainter: {
    flex: 1,
    paddingTop: 50,
  },
  modalButtonContainer: {
    marginTop: 30,
    marginHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
    marginTop: 50,
    paddingTop: 36,
    padding: 28,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: "#472183",
  },
  defaultGoalText: {
    color: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
