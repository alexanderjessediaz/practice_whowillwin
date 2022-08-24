import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp, ROOT_ROUTES} from '../../navigation/RootTypes';
import {Colors} from '../../styles';
import {DEVICE_HEIGHT} from '../../styles/util';
// import {User} from '../../model';

const Loading = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const goToOnboarding = useCallback(() => {
    navigation.navigate({name: ROOT_ROUTES.ONBOARDING, params: undefined});
  }, [navigation]);

  // const goToMain = useCallback(() => {
  //   navigation.navigate({name: ROOT_ROUTES.MAIN, params: undefined});
  // }, [navigation]);

  useEffect(() => {
    goToOnboarding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.background}>
      <Image
        source={{
          uri: Image.resolveAssetSource(
            require('../../../assets/onboarding/logo.jpg'),
          ).uri,
        }}
        style={styles.logo}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  logo: {
    height: 158,
    width: 340,
    marginTop: DEVICE_HEIGHT * 0.367,
  },
  version: {
    fontSize: 14,
    color: Colors.White,
    position: 'absolute',
    bottom: 30,
  },
});
