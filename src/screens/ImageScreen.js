import { View, Text } from 'react-native'
import React from 'react'
import ImageDetails from './components/ImageDetails'
export default function ImageScreen() {
  return (
    <View>
     <ImageDetails title="Forest" />
     <ImageDetails title="Beach" />
     <ImageDetails title="Mountain" />
    </View>
  )
}