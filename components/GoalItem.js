import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem=props=>{
    return (
        <TouchableOpacity  onPress={props.onDelete}>
            <View style={stylea.listItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

stylea=StyleSheet.create({
    listItems:{
        padding:10,
        backgroundColor:'lightgray',
        borderColor:'gray',
        borderWidth:1,
        marginVertical:6,
        borderRadius:5
      }
})
export default GoalItem;