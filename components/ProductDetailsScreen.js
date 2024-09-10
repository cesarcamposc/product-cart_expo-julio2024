import { ScrollView, StyleSheet, Text, View, Image, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductDetailsScreen = () => {

    const product = products[0];

    const {width} = useWindowDimensions();

  return (
    <View>
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

      <View>
        {/* Title */}
        <Text style={styles.title}>{product.name}</Text>

        {/* Price */}
        <Text style={styles.price}>{product.price}</Text>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>
      </View>

      {/* Add to Cart Button */}
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})