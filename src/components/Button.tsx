import React from 'react';

import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';


interface ButtonProps extends TouchableOpacityProps{}

export function Button({ onPress } : ButtonProps) {
  return (    
    <TouchableOpacity
      onPress={ onPress }
      activeOpacity={0.5}
      style={styles.button}>
      <Text style={styles.buttonText}>Send</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
