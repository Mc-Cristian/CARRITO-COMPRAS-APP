import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { styles } from '../../../Theme/appTheme';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/commons';
import { ModalProduct } from './ModalProduct';

//interface
interface Props{
    product: Product;
    changeStockProduct: (idProduct: number, quantity: number) => void; //funcion actualizar stock
}

export const CardProduct = ({product, changeStockProduct}:Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <View>
    <View style={styles.contentCard}>
        <Image source={{
            uri:product.pathImagen
        }}
        style={styles.imageCard}/>
        <View>
        <Text style={styles.titleCard}>{product.name}</Text>
        <Text>Precio: ${product.price.toFixed(3)}</Text>
        </View>
        <View style={styles.iconCard}>
        <Icon name='add-shopping-cart' 
        size={33}
        color={PRIMARY_COLOR}
        onPress={() => setShowModal(!showModal)}/>
        </View>
    </View> 
    <ModalProduct 
    isVisible={showModal} 
    setShowModal={() => setShowModal(!showModal)}
    product={product}
    changeStockProduct={changeStockProduct}/>
    </View>
  )
}
