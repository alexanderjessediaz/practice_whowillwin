import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../styles';
// import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../styles/util';
// import {ExpandingDot} from 'react-native-animated-pagination-dots';
// import {ButtonText} from '../../components/text/ButtonText';
// import {LargeButton} from '../../components/LargeButton';
import {useNavigation} from '@react-navigation/native';
import {
  OnboardingNavigationProp,
  ONBOARDING_ROUTES,
} from '../../navigation/onboarding/types';

const Landing = () => {
  const navigation = useNavigation<OnboardingNavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate(ONBOARDING_ROUTES.MAIN);
  };

  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text>Landing Page</Text>
        <Button onPress={handleGetStarted} title="get started" />
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.Black,
    flex: 1,
  },
});
