import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Button, Modal} from 'react-native';


const GoalInput=props=>{
    const [olderText,newerText]=useState('');

    const setTextHandler=(inputText)=>{
        newerText(inputText);
    }

    const addGoalHandler=()=>{
        props.addGoal(olderText);
        newerText('');
    };

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.TypeandAddGoal}>
            <TextInput 
                placeholder="Type your Goal" 
                style={styles.goalTextInput} 
                onChangeText={setTextHandler} 
                value={olderText}
            />
            <View style={styles.adjustButtons}>
            <Button title="Add" style={{padding:20}} onPress={addGoalHandler}/>
            <Button title="CANCEL" color="red" onPress={props.onclose}/>
            </View>
        </View>
        </Modal>
    );
}

styles=StyleSheet.create({
    goalTextInput:{
        width:'80%',
        padding:10,
        borderWidth:1,
        borderColor:'black'
      },
      TypeandAddGoal:{
          flex:1,
        flexDirection:'column',
        justifyContent:'center',
       alignItems:'center'
      },
      adjustButtons:{
          flexDirection:'row',
          justifyContent:'space-around',
          width:'60%',
          padding:10
      }
})
export default GoalInput;