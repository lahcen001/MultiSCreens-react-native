import { View, Text, TextInput, StyleSheet } from 'react-native'
import React , {useState} from 'react'

export default function TextScreen() {
    const [name, setName]  = useState('')
  return (
    <View>
    <View>
      <Text >TextScreen</Text>
      <TextInput 
      style={styles.input} 
      autoCapitalize="none"
      type="password"
      autoCorrect={false}
      onChangeText={(newValue)=>setName(newValue)}

      />
    </View>

    <Text>you name is  : {name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})
