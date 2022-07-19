import React from 'react';

import {Text, StyleSheet, TouchableOpacityProps, TouchableOpacity} from 'react-native';

interface NameProps extends TouchableOpacityProps{
  name: string
}

export function NameCard({name, ...rest} : NameProps) {

  return (
    <TouchableOpacity
    {...rest}
    >
      <Text style={styles.list}>{name}</Text>
    </TouchableOpacity>  
  )
}

const styles = StyleSheet.create({
  list: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 7,
    marginTop: 10,
  },
});
