import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch(color) {
      case 'Red':
        if (!(red + change > 255 || red - change < 0)) {setRed(red + change)};
      case 'Blue':
        if (!(blue + change > 255 || blue - change < 0)) {setRed(red + change)};
      case 'Green':
        if (!(green + change > 255 || green - change < 0)) {setRed(red + change)};
      default: return;
    }
  }

  return(
    <View>
      <ColorCounter onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red + -1 * COLOR_INCREMENT)} color="Red"/> 
      <ColorCounter onIncrease={() => setRed(blue + COLOR_INCREMENT)} onDecrease={() => setRed(blue + -1 * COLOR_INCREMENT)} color="Blue"/> 
      <ColorCounter onIncrease={() => setRed(green + COLOR_INCREMENT)} onDecrease={() => setRed(green + -1 * COLOR_INCREMENT)} color="Green"/> 
      <View style = {{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
