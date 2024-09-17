import { ScrollView, StyleSheet, Text, View, Image, FlatList, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useSelector, useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'

const ProductDetailsScreen = () => {

    const product = useSelector((state)=> state.products.selectedProduct);

    const dispatch = useDispatch();

    const {width} = useWindowDimensions();

    const addToCart = () =>{
        dispatch(cartSlice.actions.addCartItem({product}));
    }

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.name}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.textButton}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  name: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 3,
  },

  description: {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 20,
  },

  button: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 10,
    padding: 20,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%'
  },

  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})