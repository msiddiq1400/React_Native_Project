import React, {useReducer} from 'react';
import {View} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

//action = how to change the state object
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
        if (state.red + action.payload > 255 || state.red + action.payload < 0) {
            return state;
        }
        return {...state, red: state.red + action.payload};
    case 'change_blue':
        if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
            return state;
        }
        return {...state, blue: state.blue + action.payload};
    case 'change_green':
        if (state.green + action.payload > 255 || state.green + action.payload < 0) {
            return state;
        }
        return {...state, green: state.green + action.payload};
    default:
      return state;
  }
};

const SquareScreenWithReducer = () => {
  //dispatch = run my reducer function
  const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});
  const {red, blue, green} = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreenWithReducer;