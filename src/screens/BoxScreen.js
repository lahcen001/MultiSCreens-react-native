import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function BoxScreen() {
  return (
    <View style={styles.viewsStyle}>
      <Text >BoxScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    viewsStyle:{
        borderWidth:1,
        borderColor:'black'
    },
    textStyle:{
        borderWidth:1,
        borderColor:'red'
    }
})