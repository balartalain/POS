import React from 'react';
import {Button} from 'react-native';
import {Block, Text} from 'galio-framework';

function DetailsScreen({navigation}) {
  return (
    <Block flex>
      <Block style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </Block>
      <Block flex>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Drawer')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </Block>
    </Block>
  );
}
export default DetailsScreen;
