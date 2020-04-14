import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem=props=>{
    return (
        <View style={stylea.listItems}>
            <Text>{props.title}</Text>
        </View>
    );
};

stylea=StyleSheet.create({
    listItems:{
        padding:10,
        backgroundColor:'red',
        borderColor:'gray',
        borderWidth:1,
        marginVertical:6,
        borderRadius:5
      }
})
export default GoalItem;