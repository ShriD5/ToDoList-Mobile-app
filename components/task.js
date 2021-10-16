import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#0cbfe9',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,

    maxWidth: 420,
  },
  square: {
    width: 20,
    height: 20,
    borderColor: '#000000',
    opacity: 0.4,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 15,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  itemText: {
    maxWidth: 140,
  },
  circular: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
})

export default Task
