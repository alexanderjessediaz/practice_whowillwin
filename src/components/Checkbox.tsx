import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CheckboxCheckedBlueIcon,
  CheckboxUncheckedGreyIcon,
} from '../util/icons';

interface Props {
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox = ({isChecked, onChange}: Props) => {
  return (
    <TouchableOpacity onPress={onChange}>
      {isChecked ? <CheckboxCheckedBlueIcon /> : <CheckboxUncheckedGreyIcon />}
    </TouchableOpacity>
  );
};

export default Checkbox;
