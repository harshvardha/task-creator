import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, id, setCourseGoals }) => {
    const deleteItemHandler = () => {
        setCourseGoals(previousGoals => previousGoals.filter(goal => goal.id !== id));
    }

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#210644" }}
                onPress={deleteItemHandler}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
    },
    goalText: {
        padding: 8,
        color: "white",
        alignSelf: "center"
    },
    pressed: {
        opacity: 0.5
    }
});

export default GoalItem;