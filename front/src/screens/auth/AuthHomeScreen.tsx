import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import CustomButton from '@/components/CustomButton';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Image의 경우 Image컴포넌트를 사용 src = source */}
        <Image
          resizeMode="contain"
          source={require('../../assets/MATZIP.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
