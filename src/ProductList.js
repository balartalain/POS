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
const renderItem = ({item}) => {
  if (item.empty) {
    return <View style={[styles.productItem, styles.itemTransparent]} />;
  }
  return (
    <Block style={styles.productItem}>
      <Text>{item.name}</Text>
    </Block>
  );
};
const minCols = 2;

const calcNumColumns = width => {
  const cols = width / styles.productItem.width;
  const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
  const colsMinusMargin = cols - 2 * colsFloor * styles.productItem.margin;
  if (colsMinusMargin < colsFloor && colsFloor > minCols) {
    return colsFloor - 1;
  } else {
    return colsFloor;
  }
};
const formatData = (data1, numColumns1) => {
  const amountFullRows = Math.floor(data1.length / numColumns1);
  let amountItemsLastRow = data1.length - amountFullRows * numColumns1;

  while (amountItemsLastRow !== numColumns1 && amountItemsLastRow !== 0) {
    data1.push({id: `empty-${amountItemsLastRow}`, empty: true});
    amountItemsLastRow++;
  }
  return data1;
};
const ProductList = ({products, navigation}) => {
  const {width} = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);
  return (
    <Block style={styles.container}>
      <Block style={styles.searchProductContainer}>
        <Searchbar
          updateSearch={text => console.log(text)}
          onClear={() => Keyboard.dismiss()}
        />
      </Block>
      <FlatList
        //contentContainerStyle={styles.productListContainer}
        numColumns={numColumns}
        formatData={formatData(data, numColumns)}
        data={data}
        renderItem={renderItem}
        key={numColumns}
        //keyExtractor={item => item.id}
        //onRefresh={() => console.log('refreshing')}
      />
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
