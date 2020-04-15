import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Button, Modal} from 'react-native';


const GoalInput=props=>{
    const [olderText,newerText]=useState('');

    const setTextHandler=(inputText)=>{
        newerText(inputText);
    }

    return(
        <Modal >
        <View style={styles.TypeandAddGoal}>
            <TextInput 
                placeholder="Type your Goal" 
                style={styles.goalTextInput} 
                onChangeText={setTextHandler} 
                value={olderText}
            />
            <Button title="Add" style={{padding:20}} onPress={props.addGoal.bind(this,olderText)}
            />
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
        flexDirection:'row',
        justifyContent:'space-between',
       alignItems:'center'
      },
})
export default GoalInput;