import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export {DEVICE_HEIGHT, DEVICE_WIDTH};

export const Shadowed = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3,
  elevation: 2,
};

export const LightlyShadowed = {
  shadowColor: 'rgb(128,128,128)', //the Colors.grey keeps breaking solution for now
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 1,
};

export const InputShadow = {
  shadowColor: 'rgba(13, 49, 115, 0.2)',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

export const CardShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

export const QuiteShadowed = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,

  elevation: 5,
};

export const MenuShodow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,

  elevation: 5,
};

export const StickyBottomViewShadow = {
  shadowOpacity: 0.08,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: -3,
  },
  shadowColor: '#000000',
  elevation: 4,
};
