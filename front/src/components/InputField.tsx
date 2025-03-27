import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '../constants';
import {mergeRefs} from '../utils';

interface InputFieldProps extends TextInputProps {
  placeHolder: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

// 자동대문자방지 = autoCapitalize<"none" | "sentences" | "words" | "characters" | undefined>
// 자동완성활성화 = autoCorrect<boolean | undefined>
// 맞춤법검사기능 = spellCheck<boolean | undefined>
const InputField = forwardRef(
  (
    {disabled = false, placeHolder, error, touched, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput | null>(null);
    // input 전체를 Pressable로 만들고 어딜 클릭하던 focus 되도록 설정함.
    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disabled,
            touched && Boolean(error) && styles.inputError,
          ]}>
          <TextInput
            ref={ref ? mergeRefs(innerRef, ref) : innerRef}
            editable={!disabled}
            placeholder={placeHolder}
            placeholderTextColor={colors.light.GRAY_500}
            style={[styles.input, disabled && styles.disabled]}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            {...props}
          />
          {/* Boolean(error) => 빈문자열이 아닌 경우 에러메세지 */}
          {touched && Boolean(error) && (
            <Text style={styles.error}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.light.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  disabled: {
    backgroundColor: colors.light.GRAY_200,
    color: colors.light.GRAY_700,
  },
  input: {
    fontSize: 16,
    color: colors.light.BLACK,
    padding: 0,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.light.RED_300,
  },
  error: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.light.RED_500,
  },
});

export default InputField;
