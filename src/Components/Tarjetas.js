import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import Prod1 from '../Media/Productos/a.png'
import Prod2 from '../Media/Productos/b.png'
import Prod3 from '../Media/Productos/c.png'
import Prod4 from '../Media/Productos/d.png'
import Prod5 from '../Media/Productos/e.png'

const Tarjetas = () => {
  return (
    <ScrollView 
      style={styles.scrollFlex} 
      contentContainerStyle={styles.containerContent}
    >
        <View style={styles.tarjeta}>
            <Image
                source={Prod1}
                resizeMode='cover'
                style={styles.imgProd}
            />
            <View style={styles.info}>
                <Text style={styles.nombre}>The Album - Blackpink - Pink Version</Text>
                <Text style={styles.desc}>The Album - Blackpink 1er Full Album - Pink Version</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.tituloBtn}>Agregar al Carrito</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarjeta}>
            <Image
                source={Prod2}
                resizeMode='cover'
                style={styles.imgProd}
            />
            <View style={styles.info}>
                <Text style={styles.nombre}>Eternal Sunshine - Ariana Grande</Text>
                <Text style={styles.desc}>Eternal Sunshine - El Septimo Album de Estudio de Ariana Grande - Exclusive Cover N°1 </Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.tituloBtn}>Agregar al Carrito</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarjeta}>
            <Image
                source={Prod3}
                resizeMode='cover'
                style={styles.imgProd}
            />
            <View style={styles.info}>
                <Text style={styles.nombre}>LUSH - Mitski</Text>
                <Text style={styles.desc}>LUSH - Mitski Debut Album - Green Version</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.tituloBtn}>Agregar al Carrito</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarjeta}>
            <Image
                source={Prod4}
                resizeMode='cover'
                style={styles.imgProd}
            />
            <View style={styles.info}>
                <Text style={styles.nombre}>SOUR - Olivia Rodrigo</Text>
                <Text style={styles.desc}>SOUR - Olivia Rodrigo Debut Album - Prom Version</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.tituloBtn}>Agregar al Carrito</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarjeta}>
            <Image
                source={Prod5}
                resizeMode='cover'
                style={styles.imgProd}
            />
            <View style={styles.info}>
                <Text style={styles.nombre}>In The Zone - Britney Spears</Text>
                <Text style={styles.desc}>In The Zone - El Cuarto Album de Estudio de Britney Spears - Blue Marine Edition</Text>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.tituloBtn}>Agregar al Carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default Tarjetas

const styles = StyleSheet.create({
    scrollFlex: {
        flex: 1,
        width: '100%',
    },
    containerContent: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        alignItems: 'center',
    },
    tarjeta: {
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    imgProd: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    info: {
        paddingLeft: 10,
        flex: 1,
        justifyContent: 'space-between',
    },
    nombre: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 12,
        color: '#555',
        marginVertical: 5,
    },
    boton: {
        backgroundColor: '#000',
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 5,
    },
    tituloBtn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
})