import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'

const ShoppingCartTotals = () => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>SubTotal</Text>
      <Text style={styles.text}>787.00 US$</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10.00 US$</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>797.00 US$</Text>
    </View>
  </View>
)

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable onPress={{}} style={styles.button}>
        <Text style={styles.textButton}>CHECKOUT</Text>
      </Pressable>

    </>
  );
}

export default ShoppingCart

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 20,
    marginHorizontal: 50,
    borderColor: 'purple',
    borderTopWidth: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 20,
    fontWeight: '500'
  },

  textBold: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  button: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 30,
    borderRadius: 50,
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
    width: '80%'
  },

  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})