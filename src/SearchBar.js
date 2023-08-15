import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import normalize from 'galio-framework/src/helpers/normalize';
export default function Searchbar({value, updateSearch, onClear, style}) {
  const [query, setQuery] = useState();
  const _onClear = () => {
    setQuery('');
    if (onClear) {
      onClear();
    }
  };
  const onChangeText = text => {
    setQuery(text);
    if (updateSearch) {
      updateSearch(text);
    }
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image
            style={styles.icSearch}
            source={require('../assets/images/ic_search.png')}
          />
        </View>
        <TextInput
          value={query}
          placeholder="Buscar artículo"
          style={styles.textInput}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={_onClear} style={styles.vwClear}>
          <Image
            style={styles.icClear}
            source={require('../assets/images/ic_clear.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  vwClear: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 10,
    //backgroundColor: 'pink',
  },
  textInput: {
    // backgroundColor: 'green',
    flex: 1,
    fontSize: normalize(18),
    // height: 80,
  },

  vwSearch: {
    //flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    //width: 30,
    //backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 5,
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  icClear: {
    height: 20,
    width: 30,
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    // height: '100%', width: '100%'
  },
});
