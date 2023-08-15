import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import {Block, Text} from 'galio-framework';

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
const formatData = (data, numColumns) => {
  const amountFullRows = Math.floor(data.length / numColumns);
  let amountItemsLastRow = data.length - amountFullRows * numColumns;

  while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
    data.push({id: `empty-${amountItemsLastRow}`, empty: true});
    amountItemsLastRow++;
  }
  return data;
};
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
//https://devfabi.com/react-native-dynamic-flatlist
const DynamicFlatList = ({data}) => {
  const {width} = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);
  return (
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
  );
};
export default DynamicFlatList;

const styles = StyleSheet.create({
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
