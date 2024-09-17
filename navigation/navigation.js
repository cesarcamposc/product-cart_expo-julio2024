import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProducScreen from '../screens/ProductsScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import ShoppingCart from '../screens/ShoppingCart'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { selectNumberOfItems } from '../store/cartSlice'

const Stack = createNativeStackNavigator();

const navigation = () => {

    const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Products' 
        component={ProducScreen}
        options = {({navigation}) =>({
            headerRight: () => (
                <Pressable onPress={()=>navigation.navigate('Cart')} style = {{flexDirection: 'row'}}>
                    <Ionicons name = 'cart' size={25} color='black'/>
                    <Text style = {{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>{numberOfItems}</Text>
                </Pressable>
            )
        })}
        />
        <Stack.Screen 
        name='Product Details' 
        component={ProductDetailsScreen}
        />
        <Stack.Screen name='Cart' component={ShoppingCart} />

    </Stack.Navigator>
    
  )
}

export default navigation

const styles = StyleSheet.create({})