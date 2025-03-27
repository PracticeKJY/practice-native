import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {authNavigations} from '@/constants';
import AuthHomeScreen from '@/screens/auth/AuthHomeScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import SignupScreen from '@/screens/auth/SignupScreen';

// stack을 만드는 방법
// 1. stack = createStackNavigator()로 선언
// 2. stack에 screen을 추가 ( name / component 값 입력)

// navigation 속성
// screenOptions = {{}}

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'white'},
        headerStyle: {backgroundColor: 'white', shadowColor: 'gray'},
        headerTitleStyle: {fontSize: 15},
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{headerTitle: ' ', headerShown: false}}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AuthStackNavigator;
