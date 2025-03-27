import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import CustomButton from '@/components/CustomButton';
import {validateSignup} from '@/utils';
import useAuth from '@/hooks/queries/useAuth';

const SignupScreen = () => {
  const {signupMutation, loginMutation} = useAuth();

  const passwordRef = useRef<TextInput | null>(null);
  const confirmPasswordRef = useRef<TextInput | null>(null);

  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, password} = signup.values;

    signupMutation.mutate(
      {email, password},
      {
        onSuccess: () => {
          loginMutation.mutate({email, password});
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeHolder="이메일"
          error={signup.errors.email}
          inputMode="email"
          touched={signup.touched.email}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          {...signup.getTextInputProps('email')}
          autoFocus
        />
        <InputField
          ref={passwordRef}
          placeHolder="비밀번호"
          error={signup.errors.password}
          touched={signup.touched.password}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            confirmPasswordRef.current?.focus();
          }}
          {...signup.getTextInputProps('password')}
          secureTextEntry
          textContentType="oneTimeCode"
        />
        <InputField
          ref={confirmPasswordRef}
          placeHolder="비밀번호 확인"
          onSubmitEditing={handleSubmit}
          error={signup.errors.confirmPassword}
          touched={signup.touched.confirmPassword}
          {...signup.getTextInputProps('confirmPassword')}
          secureTextEntry
          textContentType="oneTimeCode"
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
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

export default SignupScreen;
