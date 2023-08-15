import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {Block, Text, Button, theme} from 'galio-framework';
import Searchbar from './SearchBar';
import DynamicFlatList from './DynamicFlatList';
const data = [
  {
    id: 1,
    name: 'Cerveza',
    qty: 1,
    price: 160,
  },
  {
    id: 2,
    name: 'Refresco',
    qty: 1,
    price: 130,
  },
  {
    id: 3,
    name: 'Cigarro Rodman Verde',
    qty: 20,
    price: 360,
  },
  {
    id: 4,
    name: 'Paleta',
    qty: 3,
    price: 30,
  },
  {
    id: 5,
    name: 'Cerveza',
    qty: 1,
    price: 160,
  },
  {
    id: 6,
    name: 'Refresco',
    qty: 1,
    price: 130,
  },
  {
    id: 7,
    name: 'Cigarro Rodman Verde',
    qty: 20,
    price: 360,
  },
  {
    id: 48,
    name: 'Paleta',
    qty: 3,
    price: 30,
  },
];
const ProductList = ({products, navigation}) => {
  return (
    <Block style={styles.container}>
      <Block style={styles.searchProductContainer}>
        <Searchbar
          updateSearch={text => console.log(text)}
          onClear={() => Keyboard.dismiss()}
        />
      </Block>
      <DynamicFlatList data={data} />
      {/* <Button onPress={() => navigation.navigate('Details')}>
          Got to Details screen
        </Button> */}
    </Block>
  );
};
export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchProductContainer: {
    //flex: 0.1,
    height: 60,
    padding: 2,
  },
  productListContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  productItem: {
    flex: 1,
    margin: 3,
    width: 100,
    height: 110,
    backgroundColor: 'yellow',
  },
  itemTransparent: {
    backgroundColor: 'transparent',
  },
});
