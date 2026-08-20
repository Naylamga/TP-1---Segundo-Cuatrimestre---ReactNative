import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tarjetas from '../Components/Tarjetas'

const Productos = () => {
  return (
    <View style={styles.container}>
      <Tarjetas/>
    </View>
  )
}

export default Productos

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})