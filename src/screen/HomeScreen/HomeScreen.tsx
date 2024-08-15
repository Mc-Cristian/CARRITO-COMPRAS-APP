import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProduct } from './Components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SECUNDARY_COLOR } from '../../commons/commons';
import { styles } from '../../Theme/appTheme';
import { ModalCard } from './Components/ModalCard';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImagen: string;
}

export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
}

export const HomeScreen = () => {
  const products: Product[] = [
    { id: 1, name: 'Kawasaki ZH2', price: 22.500, stock: 0, pathImagen: 'https://www.casaexito.com/wp-content/uploads/2023/08/ZH2-ABS-21.jpg' },
    { id: 2, name: 'Kawasaki z900', price: 17.000, stock: 5, pathImagen: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Z900_SL1_STU__1__001.png' },
    { id: 3, name: 'Kawasaki Ninja ZX-4RR', price: 10.000, stock: 5, pathImagen: 'https://i0.wp.com/www.kawasaki.com.mx/wp-content/uploads/2023/12/kawasaki-ninja-zx-4rr-2024-767x431-1.png?fit=767%2C431&ssl=1' },
    { id: 4, name: 'Kawasaki 650', price: 7.500, stock: 5, pathImagen: 'https://i0.wp.com/www.kawasaki.com.mx/wp-content/uploads/2023/12/kawasaki-ninja-650-2024-767x431-1.png?fit=767%2C431&ssl=1' },
    { id: 5, name: 'Kawasaki 400 KRT', price: 12.700, stock: 5, pathImagen: 'https://i0.wp.com/www.kawasaki.com.mx/wp-content/uploads/2023/01/Kawasaki-Ninja-400-KRT-Edition-semi-profile.png?fit=675%2C379&ssl=1' },
    { id: 6, name: 'Kawasaki Z900RS', price: 20.000, stock: 5, pathImagen: 'https://a.mcdn.es/mnet/contents/media/resources/2021/9/1180557.jpg/900x505cut/' },
    { id: 7, name: 'Kawasaki VERSYS 100', price: 9.599, stock: 5, pathImagen: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Versys%201000%20SE_GN2_STU%20(1).001.png' },
    { id: 8, name: 'Kawasaki Z400', price: 5.500, stock: 5, pathImagen: 'https://www.casaexito.com/wp-content/uploads/2023/08/Z400-22.jpg' },
    { id: 9, name: 'Kawasaki KX 450X', price: 6.950, stock: 5, pathImagen: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_KX450X_GN1_STU__2_.png' },
    { id: 10, name: 'Kawasaki KLR650', price: 8.750, stock: 5, pathImagen: 'https://www.icasamotos.com.ar/16574-thickbox_default/motocicleta-kawasaki-kx-250-f-2023.jpg' },
    { id: 11, name: 'Kawasaki Eliminator', price: 21.000, stock: 5, pathImagen: 'https://i0.wp.com/www.kawasaki.com.mx/wp-content/uploads/2023/11/kawasaki-eliminator-767x431-1.png?fit=767%2C431&ssl=1' },
  ];

  const [productsState, setProductsState] = useState(products);
  const [car, setCar] = useState<Car[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const changeStockProduct = (idProduct: number, quantity: number) => {
    const updatedProducts = productsState.map(product =>
      product.id === idProduct
        ? { ...product, stock: product.stock - quantity }
        : product
    );
    setProductsState(updatedProducts);
    aadProduct(idProduct, quantity);
  };

  const aadProduct = (idProduct: number, quantity: number) => {
    const product = productsState.find(product => product.id === idProduct);
    if (!product) {
      return;
    }

    const existingProduct = car.find(item => item.id === idProduct);
    if (existingProduct) {
      const updatedCart = car.map(item =>
        item.id === idProduct
          ? { ...item, totalQuantity: item.totalQuantity + quantity }
          : item
      );
      setCar(updatedCart);
    } else {
      const newProductCar: Car = {
        id: product.id,
        name: product.name,
        price: product.price,
        totalQuantity: quantity
      };
      setCar([...car, newProductCar]);
    }
  };

  const handlePurchase = () => {
    //Limpiar el carrito después de la compra
    setCar([]);
  
  };

  const handleCartIconPress = () => {
    if (car.length > 0) {
      setShowModal(!showModal);
    }
  };

  return (
    <View>
      <View style={styles.contentHeaderHome}>
        <TitleComponent title='Productos.Kawasaki' />
        <View style={styles.iconCardHome}>
          <Text style={styles.textIconCard}>{car.length}</Text>
          <TouchableOpacity
            onPress={handleCartIconPress}
            disabled={car.length === 0}
          >
            <Icon
              name='add-business'
              size={40}
              color={car.length > 0 ? SECUNDARY_COLOR : 'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BodyComponents>
        <FlatList
          data={productsState}
          renderItem={({ item }) => (
            <CardProduct
              product={item}
              changeStockProduct={changeStockProduct}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </BodyComponents>
      <ModalCard
        isVisible={showModal}
        car={car}
        setShowModal={() => setShowModal(!showModal)}
        onPurchase={handlePurchase}
      />
    </View>
  );
};
