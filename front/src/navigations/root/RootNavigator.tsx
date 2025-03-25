import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNatigator from '../drawer/MainDrawerNatigator';

const RootNavigator = () => {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNatigator /> : <AuthStackNavigator />}</>;
};

const styles = StyleSheet.create({});

export default RootNavigator;
