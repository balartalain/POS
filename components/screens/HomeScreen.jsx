import React from 'react';
import {StatusBar} from 'react-native';
import {Block, Text, Button, theme} from 'galio-framework';
const HomeScreen = ({navigation}) => {
  return (
    <Block flex>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.PRIMARY}
      />
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </Block>
  );
};
export default HomeScreen;
