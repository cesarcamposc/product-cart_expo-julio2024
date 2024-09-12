import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Navigation from '../navigation/navigation'
import CartListItem from '../components/CartListItem';

export default function index() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})