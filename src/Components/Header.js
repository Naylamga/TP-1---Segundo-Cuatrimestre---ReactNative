import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Logo from '../Media/Header/Logo.png'

const Header = ({ onOpenMenu }) => {
  return (
    <View style={styles.container}>
        <View style={styles.encabezado}>
            <Image 
                source={Logo}
                resizeMode="cover"
                style={styles.logo}
            />
            <View style={styles.menu}>
                <Text style={styles.titulo}>ROMA</Text>
                <Text style={styles.eslogan}>Discos de Vinilo</Text>
            </View>
            <TouchableOpacity style={styles.responsive} onPress={onOpenMenu}>
                <Text style={styles.icono}>≡</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
    paddingTop: 35,
    backgroundColor: '#fff',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 3,
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menu: {
    flex: 1,
    marginLeft: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eslogan: {
    fontSize: 10,
    color: '#666',
  },
  responsive: {
    padding: 5,
  },
  icono: {
    fontSize: 26,
    fontWeight: 'bold',
  },
})