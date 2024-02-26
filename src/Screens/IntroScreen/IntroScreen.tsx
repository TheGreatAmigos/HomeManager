import React from "react";
import { View, Pressable, Text } from "react-native"; // Import Text component
import { styles } from "./styles";
// Importing SVG file should look like this:
import Title from '../../assets/tittle_app.svg';
import Btn_intro from '../Components/Btn_intro/btn.tsx';

function IntroScreen({ navigation }: any): React.ReactElement {
    console.log('IntroScreen');
    
    function goToLogin() {
        navigation.navigate('LogInScreen');
    }

    function goToRegister() {
        navigation.navigate('RegisterScreen');
    }
    
    return (
        <View style={styles.container}>
            {/* Wrapping Title in a View */}
            <View style={styles.title}>
                <Title />
            </View>
            <View style={styles.subContainer}>
                <Pressable onPress={goToLogin}>
                    <Btn_intro text='Log in' backgroundColor='#FFFFFF' textColor='#0B844A' />
                </Pressable>
                <View style={styles.btnRegister}>
                    <Pressable onPress={goToRegister}>
                        <Btn_intro text='Register' backgroundColor='#0B844A' textColor='#FFFFFF' />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default React.memo(IntroScreen);
