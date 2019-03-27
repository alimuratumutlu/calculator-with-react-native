import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class InputNumberButton extends Component {
  render() {
    const {value, handleOnPress} = this.props;

    return (

        <TouchableOpacity 
            style={styles.container}
            onPress={() => handleOnPress(value)}>
            <Text style={styles.text}>{value}</Text>    
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
      color: 'white',
      fontSize: 26
  }
});
