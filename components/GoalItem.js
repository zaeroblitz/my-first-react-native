import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ data, onRemoveItem }) => {
  const removeGoalHandler = () => {
    onRemoveItem(data.id);
  };

  return (
    <View style={styles.goalItemContainer}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{data.text}</Text>
      </View>

      <Pressable
        onPress={removeGoalHandler}
        style={({ pressed }) => pressed && styles.pressedDelete}
      >
        <View style={styles.deleteContainer}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalItem: {
    flex: 4,
    margin: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#7743DB",
  },
  goalText: {
    color: "#eeeeee",
  },
  deleteContainer: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF597B",
    borderRadius: 12,
  },
  pressedDelete: {
    backgroundColor: "#FF8E9E",
  },
  deleteText: {
    padding: 6,
    color: "#ffffff",
    textTransform: "uppercase",
  },
});
