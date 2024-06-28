import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Video from 'react-native-video';

//Screens
import IntroScreen from './src/Screens/IntroScreen/IntroScreen';
import LogInScreen from './src/Screens/LogInScreen/LogInScreen';
import RegisterScreen from './src/Screens/RegisterScreen/RegisterScreen';
import MainScreen from './src/Screens/MainScreen/MainScreen';

const { width, height } = Dimensions.get('window');


function App({ navigation }: any): React.ReactElement {
  const Stack = createNativeStackNavigator();

  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}
      >
        {splashVisible ? (
          <Stack.Screen name="SplashScreen"  options={{ headerShown: false }}>
            {() => (
              <View style={{ flex: 1 }}>
                <Video
                  source={require('./src/assets/Intro_test_2.mp4')}
                  style={{ flex: 1 }}
                  resizeMode="cover"
                  onLoad={() => {
                    // Handle video load
                  }}
                  onEnd={() => {
                    setSplashVisible(false); // After the video ends, hide the splash screen
                    // You can add logic here to navigate to the main screen or hide the splash screen
                  }}
                />
              </View>
            )}
          </Stack.Screen>
        ) : null}
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;