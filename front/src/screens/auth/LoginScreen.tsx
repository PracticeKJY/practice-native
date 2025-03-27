import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';

// Input props
// ****  = secureTextEntry
// inputMode< 'none' |'text'|'decimal'|'numeric'|'tel'|'search'|'email'|'url';> = 다양한 키보드 형태

const LoginScreen = () => {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const passwordRef = useRef<TextInput | null>(null);

  const handleSubmit = () => {
    console.log(login.values, 'values');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeHolder="이메일"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          {...login.getTextInputProps('email')}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          returnKeyType="next"
          blurOnSubmit={false}
          autoFocus
        />
        <InputField
          ref={passwordRef}
          placeHolder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          {...login.getTextInputProps('password')}
          secureTextEntry
          returnKeyType="join"
          blurOnSubmit={false}
          textContentType="oneTimeCode"
          onSubmitEditing={handleSubmit}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
