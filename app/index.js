import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Navigation from '../navigation/navigation'
import { Provider } from 'react-redux';
import { store } from '../store';

export default function index() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})