import React from 'react';
import {
     View,
     Text,
     StyleSheet
 } from 'react-native';

function StateGame(props) {
    return (
       <View>
           <Text style={StyleSheet.resultText}>Result: {props.result}</Text>
       </View> 
    )
}

const styles=StyleSheet.create({
    
    resultText: {
        fontWeight: '500'
    }
});
export default StateGame;