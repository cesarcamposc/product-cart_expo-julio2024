import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

const ProductsScreen = ({navigation}) => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products)

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{ 
            dispatch(productsSlice.actions.setSelectedProduc(item.id));
            navigation.navigate('Product Details')}} style = { styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemContainer: { 
        width: '50%',   
        padding: 1,
    },
    
    image: {
        width: '100%',
        aspectRatio: 1,
    }
})