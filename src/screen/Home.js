import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Productos from './Productos';
import Nosotros from './Nosotros';

import Prod1 from '../Media/Productos/a.png'
import Prod2 from '../Media/Productos/b.png'
import Prod3 from '../Media/Productos/c.png'
import Logo from '../Media/Header/Logo.png'

const Home = () => {
  const [pagina, setPagina] = useState('Home');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const cambiarSeccion = (seccion) => {
    setPagina(seccion);
    setMenuAbierto(false);
  };

  return (
    <View style={styles.containerPrincipal}>
      <Header onOpenMenu={toggleMenu} />

      <View style={styles.contenedorContenido}>
        {pagina === 'Home' && (
          <ScrollView style={styles.scrollFlex} contentContainerStyle={styles.scrollHome}>
            
            {/* 1. Logotipo */}
            <View style={styles.seccionLogo}>
              <Image source={Logo} style={styles.logoGrande} resizeMode="contain" />
              <Text style={styles.tituloEmpresa}>ROMA</Text>
              <Text style={styles.subtituloEmpresa}>Discos de Vinilo</Text>
            </View>

            {/* 2. Últimos 3 Productos */}
            <View style={styles.seccionBloque}>
              <Text style={styles.tituloSeccion}>Últimos Productos</Text>
              <View style={styles.gridProductos}>
                <View style={styles.tarjetaProducto}>
                  <Image source={Prod1} style={styles.imgProd} resizeMode="cover" />
                  <Text style={styles.nombreProd} numberOfLines={2}>
                    The Album - BlackPink
                  </Text>
                </View>
                <View style={styles.tarjetaProducto}>
                  <Image source={Prod2} style={styles.imgProd} resizeMode="cover" />
                  <Text style={styles.nombreProd} numberOfLines={2}>
                    Eternal Sunshine - Ariana Grande
                  </Text>
                </View>
                <View style={styles.tarjetaProducto}>
                  <Image source={Prod3} style={styles.imgProd} resizeMode="cover" />
                  <Text style={styles.nombreProd} numberOfLines={2}>
                    LUSH - Mitski
                  </Text>
                </View>
              </View>
            </View>

            {/* 3. Mapa iFrame */}
            <View style={styles.seccionBloque}>
              <Text style={styles.tituloSeccion}>Ubicación de la Empresa</Text>
              <View style={styles.contenedorIframe}>
                <iframe
                  title="Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44367098485!2d-58.5033386!3d-34.603722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b415197ab%3A0x70d58c3a2f0e650!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </View>
            </View>

          </ScrollView>
        )}

        {pagina === 'Nosotros' && <Nosotros />}
        {pagina === 'Productos' && <Productos />}
        {pagina === 'Contactos' && (
          <View style={styles.vistaContacto}>
            <Text style={styles.tituloSeccion}>Contactos</Text>
            <Text style={styles.textoContacto}>Email: contacto@roma.com</Text>
            <Text style={styles.textoContacto}>Teléfono: +54 11 1234-5678</Text>
          </View>
        )}
      </View>

      {/* Menú Lateral */}
      {menuAbierto && (
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={toggleMenu}>
          <View style={styles.menuLateral}>
            <Text style={styles.menuTitulo}>Menú</Text>
            <TouchableOpacity style={styles.opcionMenu} onPress={() => cambiarSeccion('Home')}>
              <Text style={styles.textoOpcion}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcionMenu} onPress={() => cambiarSeccion('Nosotros')}>
              <Text style={styles.textoOpcion}>Nosotros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcionMenu} onPress={() => cambiarSeccion('Productos')}>
              <Text style={styles.textoOpcion}>Productos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcionMenu} onPress={() => cambiarSeccion('Contactos')}>
              <Text style={styles.textoOpcion}>Contactos</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}

      <Footer setPaginas={setPagina} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f8f9fa',
  },
  contenedorContenido: {
    flex: 1,
    width: '100%',
  },
  scrollFlex: {
    flex: 1,
    width: '100%',
  },
  scrollHome: {
    padding: 15,
    alignItems: 'center',
  },
  seccionLogo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },
  logoGrande: {
    width: 90,
    height: 90,
    marginBottom: 5,
  },
  tituloEmpresa: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtituloEmpresa: {
    fontSize: 12,
    color: '#666',
  },
  seccionBloque: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  gridProductos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  tarjetaProducto: {
    width: '31%',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 6,
  },
  imgProd: {
    width: '100%',
    height: 70,
    borderRadius: 6,
    marginBottom: 6,
  },
  nombreProd: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  contenedorIframe: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  vistaContacto: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoContacto: {
    fontSize: 15,
    marginVertical: 4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
    flexDirection: 'row',
  },
  menuLateral: {
    width: '75%',
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
    paddingTop: 50,
  },
  menuTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  opcionMenu: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  textoOpcion: {
    fontSize: 15,
  },
});