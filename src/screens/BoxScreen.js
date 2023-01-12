import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle1}>Box Screen 1</Text>
            <Text style={style.textStyle2}>Box Screen 22</Text>
            <Text style={style.textStyle3}>Box Screen 3</Text>
        </View>
    );
}

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 140, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'

        // //justify content works with flex-direction, direct proportion
        // //justify content opposite to align-items
        // // default is stretch if not provided
        // //below three are used on parent and they adjust children positions
        // alignItems: 'stretch', 
        // flexDirection: 'row',
        // justifyContent: 'flex-start'
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        height: 70,
        // flex: 1
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'blue',
        height: 70,
        alignSelf: 'flex-end'
        // marginTop: 70
        //flex work in same direction with 'flex-direction' 
        //flex used on child
        // flex: 1,

        // //override the parent alignItems property, used by child
        // alignSelf: 'flex-end'

        // //position ignore the stretch, obey flex-end
        // //ignore syblings
        //// replace below 5 lines with
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0
        // ...StyleSheet.absoluteFillObject
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
        height: 70,
        // flex: 1
    }
});