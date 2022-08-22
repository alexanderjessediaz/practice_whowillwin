import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../styles';
import {DEVICE_HEIGHT} from '../../styles/util';
// import {LargeButton} from '../../components/LargeButton';
// import {ButtonText} from '../../components/text/ButtonText';
// import {Spacing} from '../../components/Spacing';
// import Loader from '../../components/LoadingIcon';
// import {useNavigation} from '@react-navigation/native';
// import {MainNavigationProp, MAIN_ROUTES} from '../../navigation/main/types';
// import {useAppDispatch, useAppSelector} from '../../store/hooks';
// import {alert} from '../../util/alert';

const MainMenu = () => {
  // const navigation = useNavigation<MainNavigationProp>();
  // const dispatch = useAppDispatch();
  // const user = useAppSelector(state => state.user);
  // const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.main} edges={['top']}>
      <View style={styles.logoContainer}>
        <Text>Menu screen</Text>
        {/* <FastImage
          source={{
            uri: Image.resolveAssetSource(
              require('../../../assets/onboarding/logo.png'),
            ).uri,
          }}
          style={styles.logoHeaderImg}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: DEVICE_HEIGHT * 0.125,
  },
});

export default MainMenu;
