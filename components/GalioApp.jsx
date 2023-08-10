/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Block, Text, GalioProvider, theme} from 'galio-framework';

function GalioApp() {
  return (
    <GalioProvider>
      <Block
        flex
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <Block flex={0.5} style={{backgroundColor: 'red'}} />
        <Block flex style={{backgroundColor: 'darkorange'}} />
        <Block flex style={{backgroundColor: 'green'}} />
      </Block>
    </GalioProvider>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'green',
  },
});
export default GalioApp;
