import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useAuth from '@/hooks/queries/useAuth';

const MapHomeScreen = () => {
  const {logoutMutation} = useAuth();

  const handleLogout = () => {
    logoutMutation.mutate(null);
  };
  return (
    <View>
      <Text>MapHomeScreen</Text>
      <Button title="로그아웃" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapHomeScreen;
