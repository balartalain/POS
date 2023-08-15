import React from 'react';
import {StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Block, Text, Button, theme} from 'galio-framework';
import ProductList from '../ProductList';
const headerLeft = ({navigation}) => {
  return () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.headerLeft}>
        <FontAwesome6 name="bars" size={23} color="#fff" />
      </TouchableOpacity>
    );
  };
};
const HeaderQtyProducts = () => {
  return (
    <Block width={30} height={28} style={headerQtyProductsStyles.container}>
      <Block flex={0.9} style={headerQtyProductsStyles.inner}>
        <Text color={'white'}>1</Text>
      </Block>
    </Block>
  );
};
const headerQtyProductsStyles = StyleSheet.create({
  inner: {
    backgroundColor: theme.COLORS.PRIMARY,
    width: '90%',
    marginLeft: 2,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginLeft: 10,
    backgroundColor: 'white',
  },
});
const headerTitle = props => {
  return () => {
    return (
      <TouchableOpacity>
        <Block flex row style={headerTitleStyles.container}>
          <Text p bold color={'white'}>
            Venta
          </Text>
          <HeaderQtyProducts />
        </Block>
      </TouchableOpacity>
    );
  };
};
const headerTitleStyles = StyleSheet.create({
  container: {alignItems: 'center'},
});
const headerRight = props => {
  return () => {
    return <Fontisto name="spinner-refresh" size={23} color="#fff" />;
  };
};
const PosScreen = ({navigation}) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: headerLeft({navigation}),
      headerTitle: headerTitle(),
      headerRight: headerRight(),
    });
  }, [navigation]);
  return (
    <Block flex={1} style={{backgroundColor: 'yellow'}}>
      <Block style={styles.toPayContainer}>
        <Block style={styles.toPay} />
      </Block>
      <Block style={styles.searchProductContainer} />
      <Block style={styles.productListContainer}>
        <ProductList />
        <Button onPress={() => navigation.navigate('Details')}>
          Got to Details screen
        </Button>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginRight: 15,
  },
  container: {
    flex: 1,
  },
  toPayContainer: {
    flex: 0.3,
    backgroundColor: 'blue',
  },
  searchProductContainer: {
    backgroundColor: 'red',
  },
  productListContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});
export default PosScreen;
