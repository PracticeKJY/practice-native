import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigations/root/RootNavigator';

// View = div 주의. View안에 텍스트를 적을 때 <Text>태그 사용
// SafeAreaView = 안드로이드 상단바, 하단바를 무시하고 화면을 사용할 수 있게 해줌
// input = TextInput

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// margin, paading의 경우 x,y로 따로지정해야함 (marginHorizontal, marginVertical)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'black',
//     width: 100,
//     height: 100,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

export default App;
