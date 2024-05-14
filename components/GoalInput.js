import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";
import goalImage from "../assets/images/goal.png";

const GoalInput = ({ setCourseGoals, setModalIsVisible, modalIsVisible }) => {
    const [goal, setGoal] = useState("");

    const addGoalHandler = () => {
        setCourseGoals(previousGoals => [
            ...previousGoals,
            { text: goal, id: Math.random().toString() }
        ]);
        setModalIsVisible(false);
    }

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={goalImage} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal"
                    onChangeText={(enteredText) => setGoal(enteredText)}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={() => setModalIsVisible(false)} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        width: "90%",
        padding: 16,
        color: "#120438",
        backgroundColor: "#e4d0ff",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    button: {
        width: "33%",
        marginHorizontal: 8
    }
});

export default GoalInput;