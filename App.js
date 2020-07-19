import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StateGame from './Component/StateGame';
import ButtonSelect from './Component/ButtonSelect';
import PlayerCard from './Component/PlayerCard';

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

const getRoundOutcome = (userChoice, computerChoice) => {
  
  let resultGame;

  if (userChoice === 'rock') {
    resultGame = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'paper') {
    resultGame = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    resultGame = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) resultGame = 'Tie game!';
  return resultGame
};

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

export default class App extends React.Component {// thay vi su dung fuction ta su dung class
       // nhan vao nut hien thi thong bao
// de thay doi dong , ta dung state
// voi player thi neu bam vao nut chon mot trong ba nut se hien thi ra duoc anh tuong ung voi name
// voi computer, dung random
  constructor(props) {
    super(props);
    this.state = {
      playerChoice : {},
      computerChoice: {}
    }
  }
  onPressButton = playerChoice => {
    const found = CHOICES.find(choice => choice.name===playerChoice)
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    this.setState({
      playerChoice: found,
      computerChoice: computerChoice,
      result: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stateGameWrapper}>
          <StateGame result ={this.state.result}/>
        </View>
  
        <View style={styles.playerCardWrapper}>
          <PlayerCard playerName="Player" choice={this.state.playerChoice}/>
          <PlayerCard playerName="Computer" choice={this.state.computerChoice}/>
        </View>
  
        <View style={styles.buttonSelectWrapper}>
          <ButtonSelect onPressButton={this.onPressButton}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  stateGameWrapper: {
    flex: 0.2,
    justifyContent:'center',
    alignItems: 'center'
  },
  playerCardWrapper: {
    flex: 0.4,
    backgroundColor: 'green',
    flexDirection:'row'
  },

  buttonSelectWrapper: {
    flex: 0.4,
    justifyContent:'center',
    alignItems:'center'
  }


});
