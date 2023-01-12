import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputScreen = () => {
   const [name, setName] = useState('');
   return (
    <View>
        <Text>Enter Password:</Text>
        <TextInput 
            style={styles.input} 
            placeholder="User Input" 
            autoCapitalize="none" 
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        {name.length <= 5 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
   ); 
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default InputScreen;