import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add your goal' color={"#50eacc"} onPress={startAddGoalHandler} />
        {modalIsVisible &&
          <GoalInput
            setCourseGoals={setCourseGoals}
            modalIsVisible={modalIsVisible}
            setModalIsVisible={setModalIsVisible}
          />
        }
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  setCourseGoals={setCourseGoals}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
