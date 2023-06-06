import React from "react";
import { Text, StyleSheet ,Button, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there </Text>
    <Button
   onPress={()=>navigation.navigate('Components')}
    title="Go to components Demo"
    />
 
<Button
   onPress={()=>navigation.navigate('List')}
    title="Go to list Demo"
    />

<Button
   onPress={()=>navigation.navigate('Image')}
    title="Go to image Demo"
    />

<Button
   onPress={()=>navigation.navigate('Color')}
    title="Go to Color Demo"
    />

<Button
   onPress={()=>navigation.navigate('Counter')}
    title="Go to Counter Demo"
    />


<Button
   onPress={()=>navigation.navigate('Square')}
    title="Go to Square Demo"
    />


<Button
   onPress={()=>navigation.navigate('Text')}
    title="Go to Text Demo"
    />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
