import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCart from '../screens/ShoppingCart';
import CartListItem from '../components/CartListItem';

export default function index() {
  return (
    <View style={styles.container}>
      <ProductsScreen/>
      {/* <ProductDetailsScreen /> */}
      {/* <ShoppingCart /> */}
      {/* <CartListItem /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})