import { View, Text } from 'react-native'
import React,{ useReducer} from 'react'
import ColorCounter from './components/ColorCounter'

export default function SquareScreen() {

const INCR_NUM = 10;


// use reducer
const reducer = (state, action)=>{
// state === {red: number , green: number: blue: number}
switch (action.colorToChange){


  case 'red' : return {... state , red: state.red+ action.amount }

  case 'green':return {... state , green: state.green+ action.amount}


  case 'blue':return {... state , blue: state.blue+ action.amount}
  default :state
}
};

 const [state, dispatch] = useReducer(reducer,  {red:0, green:0, blue:0});
 

  return (
    <View>
    <ColorCounter
    color="Red"
    onDercease={()=>dispatch({colorToChange : 'red', amount:-1*INCR_NUM })}
    onIncrease={()=>dispatch({colorToChange : 'red', amount:INCR_NUM })}
    />

    <ColorCounter
    color="Blue"
    onDercease={()=>dispatch({colorToChange : 'blue', amount:-1*INCR_NUM })}
    onIncrease={()=>dispatch({colorToChange : 'blue', amount:INCR_NUM })}
    />


    <ColorCounter
    color="Green"
    onDercease={()=>dispatch({colorToChange : 'green', amount:-1*INCR_NUM })}
    onIncrease={()=>dispatch({colorToChange : 'green', amount:INCR_NUM })}
    />
<Text>red : {red}</Text>
      <View style={{height:150, width:150, backgroundColor:"rgb("+state.red+","+state.green+","+state.blue+")"}}/>
<Text>red : {state.red} / green :  {state.green} / blue :  {state.blue}</Text>
    </View>
  )
}