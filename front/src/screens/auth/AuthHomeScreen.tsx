import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import CustomButton from '../../components/CustomButton';

// navigation parameter의 타입: <StackScreenProps<AuthStackParamList, 'AuthHome'>
type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, 'AuthHome'>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView>
      <View>
        <CustomButton label="로그인하기" onPress={handleLogin} />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={handleSignup}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthHomeScreen;
