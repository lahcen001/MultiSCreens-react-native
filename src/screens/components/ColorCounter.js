import { View, Text,Button } from 'react-native'
import React from 'react'

const ColorCounter = ({color, onDercease,onIncrease}) => {
  return (
    <View>
        <Text>{color}</Text>
      <Button title="Decrease" onPress={()=>onDercease()}/>
      <Button title="Increase" onPress={()=>onIncrease()}/>
    </View>
  )
}

export default ColorCounter