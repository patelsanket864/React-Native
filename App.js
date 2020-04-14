import React, {useState} from 'react';
import { StyleSheet,Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [currentGoals,setCourseGoals]=useState([]);

  const goalHandler=goaltitle=>{
    setCourseGoals(currentGoals=>[...currentGoals,{key:Math.random().toString(), value:goaltitle}])
  }

  return (
    <View style={styles.root}>
        <GoalInput addGoal={goalHandler}/>
      <FlatList 
        data={currentGoals} 
        renderItem={itemdata=>(<GoalItem title={itemdata.item.value} />)} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    padding: 60
  }
});
