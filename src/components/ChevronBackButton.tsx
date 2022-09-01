import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ChevronBackBlackIcon} from '../util/icons';

const ChevronBackButton = () => {
  return (
    <View style={styles.main}>
      <ChevronBackBlackIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChevronBackButton;
