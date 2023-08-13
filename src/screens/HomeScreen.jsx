import React, {useCallback} from 'react';
import {View, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Block, Text, Button, theme} from 'galio-framework';

const List = ({getItems}) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    console.log('get items');
    setItems(getItems());
  }, [getItems]);
  return (
    <View>
      {items.map(item => (
        <Text>{item}</Text>
      ))}
    </View>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <Block flex>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.PRIMARY}
      />
      <Text>Home Screen e</Text>
      <Button onPress={() => navigation.navigate('POS')}>Go to POS</Button>
      <Button
        onPress={
          () =>
            navigation.navigate(
              'Details',
            ) /*setNumber(prevNumber => number + 1)*/
        }
      />
    </Block>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  headerLeft: {
    marginRight: 15,
  },
  container: {
    flex: 1,
  },
});
