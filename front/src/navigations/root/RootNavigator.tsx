import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStackNavigator from '@/navigations/stack/AuthStackNavigator';
import useAuth from '@/hooks/queries/useAuth';
import MainDrawerNatigator from '@/navigations/drawer/MainDrawerNatigator';

const RootNavigator = () => {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainDrawerNatigator /> : <AuthStackNavigator />}</>;
};

const styles = StyleSheet.create({});

export default RootNavigator;
