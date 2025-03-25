import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';

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
        <Button title="로그인화면으로 이동" onPress={handleLogin} />
        <Button title="회원가입화면으로 이동" onPress={handleSignup} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthHomeScreen;
