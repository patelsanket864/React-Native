import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals,setCourseGoals]=useState([]);
  const [addmodal,setaddmodal]=useState(false);

  const goalHandler=goaltitle=>{
    setCourseGoals(currentGoals=>[...currentGoals,{key:Math.random().toString(), value:goaltitle}])
    setaddmodal(false);
  }
  
  const deleteGoalItem=goalId=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>{goal.key!=goalId})
    })
  }

  const closeinputHandler=()=>{
    setaddmodal(false);
  }
  return (
    <View style={styles.root}>
      <Button title="Add Goal" onPress={()=>{setaddmodal(true)}}/>
      <GoalInput visible={addmodal} addGoal={goalHandler} onclose={closeinputHandler}/>
      <FlatList 
        data={courseGoals} 
        renderItem={itemdata=>(<GoalItem  onDelete={deleteGoalItem.bind(this,itemdata.item.key)} title={itemdata.item.value} />)} 
      />
      
    </View>
  );

}

const styles = StyleSheet.create({
  root:{
    padding: 60
  }
});
