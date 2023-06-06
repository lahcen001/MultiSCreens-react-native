import { View, Text , Button} from 'react-native'
import React , {useState, useReducer} from 'react'

export default function CounterScreen() {



const reducer =(state,action)=>{
if(action.type =="plus"){
  return {... state , counter: state.counter+ action.counter }
}else{
  return  {... state , counter: state.counter-action.counter }
}
}

const [state, dispatch] = useReducer(reducer, {
    counter : 0
})

  return (
    <View>
<Text>Count : {state.counter}</Text>
<Button title="Increase" onPress={()=>dispatch({type:"plus", counter:1})}/>
<Button title="Decrease" onPress={()=>dispatch({type:"pluas2", counter:1})}/>
    </View>
  )
}