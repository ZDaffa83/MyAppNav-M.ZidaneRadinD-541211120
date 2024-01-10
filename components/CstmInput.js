import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Custominput = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export default Custominput;
