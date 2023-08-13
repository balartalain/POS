import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Block, Text, Button, theme} from 'galio-framework';

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
const headerTitle = props => {
  return () => {
    return (
      <Block flex row>
        <Text>POS</Text>
      </Block>
    );
  };
};
const headerRight = props => {
  return () => {
    return <FontAwesome6 name="star" size={23} color="#fff" />;
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
    <Block flex>
      <Text>Pos Screen e</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Got to Details screen
      </Button>
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
});
export default PosScreen;
