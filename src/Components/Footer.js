import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import IcoHome from '../Media/Footer/a.png'
import IcoProd from '../Media/Footer/b.png'
import IcoNos from '../Media/Footer/c.png'

const Footer = ({ setPaginas }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.boton} onPress={() => setPaginas('Home')}>
                <Image
                    source={IcoHome}
                    resizeMode="cover"
                    style={styles.imgIcono}
                />
                <Text style={styles.texto}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setPaginas('Productos')}>
                <Image
                    source={IcoProd}
                    resizeMode="cover"
                    style={styles.imgIcono}
                />
                <Text style={styles.texto}>Productos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setPaginas('Nosotros')}>
                <Image
                    source={IcoNos}
                    resizeMode="cover"
                    style={styles.imgIcono}
                />
                <Text style={styles.texto}>Nosotros</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderTopColor:'#e0e0e0',
    },
    imgIcono:{
        width:30,
        height:30,
    },
    boton:{
        alignItems:'center',
    },
    texto:{
        fontSize:12,
        marginTop:2,
    },
})