import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Fondo from '../Media/Fondo/Tienda.jpg'

const Nosotros = () => {
  return (
    <ScrollView style={styles.scrollFlex} contentContainerStyle={styles.container}>
      <Image source={Fondo} resizeMode="cover" style={styles.banner} />

      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Sobre Nosotros</Text>
        <Text style={styles.desc}>
          Somos apasionados por la música en su formato más puro. Nos dedicamos a seleccionar los mejores discos de vinilo para brindarte una experiencia sonora única.
        </Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Misión</Text>
        <Text style={styles.desc}>
          Nuestra misión es conectar a los amantes de la música con sus álbumes favoritos en formato físico, ofreciendo una selección cuidada y al mejor precio.
        </Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Visión</Text>
        <Text style={styles.desc}>
          Nuestra visión es convertirnos en la tienda de vinilos de referencia, donde encontrar y coleccionar grandes joyas musicales sea accesible y apasionante.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  scrollFlex: {
    flex: 1,
    width: '100%',
  },
  container: {
    padding: 15,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  tarjeta: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  desc: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
  },
});