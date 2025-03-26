import React from 'react';
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import {colors} from '../constants';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  inValid?: boolean;
}

// 기기별 사이즈 구분하는 방법
const deviceHeight = Dimensions.get('screen').height;

const CustomButton = ({
  label,
  variant = 'filled',
  size = 'large',
  inValid = false,
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        styles[size],
        inValid && styles.inValid,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
      ]}
      {...props}>
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  inValid: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK_700,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.PINK_700,
    backgroundColor: colors.WHITE,
  },
  filledPressed: {
    backgroundColor: colors.PINK_500,
  },
  outlinedPressed: {
    borderWidth: 1,
    borderColor: colors.PINK_700,
    opacity: 0.5,
  },
  small: {},
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
  },
  large: {width: '100%', paddingVertical: deviceHeight > 700 ? 15 : 10},
});

export default CustomButton;
