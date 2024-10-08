import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { cartSlice } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const CartListItem = ({cartItem}) => {

    const dispatch = useDispatch();

    const decreaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({
            productId : cartItem.product.id,
            amount : -1,
        }))      
    }

    const increaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({
            productId : cartItem.product.id,
            amount : 1,
        }))
    }

  return (
    <View style = {styles.container}>
        <Image source = {{uri: cartItem.product.image}}  style = {styles.image}/>

        <View style = {styles.contentContainer}>
            <Text style = {styles.name}>{cartItem.product.name}</Text>
            <Text style = {styles.size}>{cartItem.size}</Text>

            <View style = {styles.footer}>
                <Feather
                onPress={decreaseQuantity}
                name='minus-circle'
                size = {25}
                color= 'red' 
                />

                <Text style = {styles.quantity}>{cartItem.quantity}</Text>

                <Feather
                onPress={increaseQuantity}
                name='plus-circle'
                size = {25}
                color= 'red' 
                />

                <Text style = {styles.itemTotal}> $ {cartItem.product.price * cartItem.quantity}</Text>

            </View>

        </View>
      
    </View>
  )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 50,
    },

    image: {
        width: '50%',
        aspectRatio:  1,
    },

    contentContainer:  {
        flex: 1,
        marginLeft: 10,
    },

    name: {
        fontWeight: '500',
        fontSize: 20,
    },

    size: {
        fontSize: 20,
        fontWeight: '500',
        color: 'green'
    },

    footer: {
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },

    itemTotal: {
        marginRight: 'auto',
        fontSize: 20,
        fontWeight: '500'
    }
})