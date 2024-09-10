import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import ProductsScreen from '../components/ProductsScreen';
import ProductDetailsScreen from '../components/ProductDetailsScreen';

export default function index() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      <ProductDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})