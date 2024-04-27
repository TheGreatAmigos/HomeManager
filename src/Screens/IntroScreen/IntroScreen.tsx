import React from "react";
import { View, Pressable, Dimensions } from "react-native";
import { styles } from "./styles";
import Title from '../../assets/tittle_app.svg';
import Btn_intro from '../Components/Btn_intro/btn.tsx';
import Background from '../../assets/intro_background.svg';

function IntroScreen({ navigation }: any): React.ReactElement {
    console.log('IntroScreen');

    const { width, height } = Dimensions.get('window');

    function goToLogin() {
        navigation.navigate('LogInScreen');
    }

    function goToRegister() {
        navigation.navigate('RegisterScreen');
    }

    return (
        <View style={styles.container}>
            {/* SVG Background */}
            <Background style={styles.background} />

            {/* Content */}
            <View style={styles.title}>
                <Title width={(width * 0.72)} height={height * 0.18}/>
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
