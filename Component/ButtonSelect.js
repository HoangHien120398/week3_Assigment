import React from 'react';
import {
     View,
     Text,
     TouchableOpacity,
     StyleSheet
 } from 'react-native';

 const CHOICES = [
    {
      name: 'rock',
      uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
      name: 'paper',
      uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
    {
      name: 'scissors',
      uri:
        'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    }
  ];
function ButtonSelect(props) {
    return (
       CHOICES.map( item =>{
                   return (
                       <TouchableOpacity 
                       key={item.name}
                       style={styles.button} 
                       onPress={() => props.onPressButton(item.name)}>
                           <Text style ={styles.text}> {item.name}</Text>
                       </TouchableOpacity>
                   )
               })
    )
}

 const styles=StyleSheet.create({
    button: {
        backgroundColor:'#640D14',
        marginVertical: 15,// can doc
        paddingHorizontal: 15,
        paddingVertical: 10,//chieu doc
        borderRadius: 15
    },
    text : {
        color: 'white',
        fontSize: 18,
        
    }
})
export default ButtonSelect;