import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import IntroScreen from './src/Screens/IntroScreen/IntroScreen';
import LogInScreen from './src/Screens/LogInScreen/LogInScreen';
import RegisterScreen from './src/Screens/RegisterScreen/RegisterScreen';
import MainScreen from './src/Screens/MainScreen/MainScreen';

const { width, height } = Dimensions.get('window');


function App({navigation}: any): React.ReactElement {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="IntroScreen" component={IntroScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="LogInScreen" component={LogInScreen} options={{headerShown: false}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="MainScreen" component={MainScreen}  options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
