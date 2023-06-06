import { View, Text,FlatList,Button } from 'react-native'
import React ,{useState} from 'react'


export default function ColorScreen() {
    const randomRgb = ()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
    

        return "rgb("+red+","+green+","+blue+")";
    }
    
    const [colors, setColor] = useState([]);
  return (
    <View>
    <Button 
    title="Add a Color"
    onPress={()=>{
        setColor([...colors, randomRgb()]);
    }}
    />
<FlatList
data={colors}
renderItem={({item})=>{
return <View style={{height:100 , width:100, backgroundColor:item}}/>
}
}

/>
    </View>
  )


}