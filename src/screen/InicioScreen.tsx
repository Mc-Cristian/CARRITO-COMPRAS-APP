import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


import { styles } from '../Theme/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';

export const InicioScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../imagenes/Kawasaki2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}></Text>
        <ButtonComponent textButton="Iniciar" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default InicioScreen;

