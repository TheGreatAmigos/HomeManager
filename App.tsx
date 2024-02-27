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
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
