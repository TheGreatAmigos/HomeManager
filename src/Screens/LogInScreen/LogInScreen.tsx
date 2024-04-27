import React from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native"; // Import Text component
import { styles } from "./styles";
import Btn_intro from '../Components/Btn_intro/btn.tsx';
import { Dimensions } from 'react-native';
import Input from "../Components/Txt_input/input.tsx";

import UserIcon from "../../assets/UserIcon.svg";
import PasswordIcon from "../../assets/PasswordIcon.svg";
import Background from '../../assets/intro_background.svg';

const { width, height } = Dimensions.get('window');

function LogInScreen({ navigation }: any): React.ReactElement {
    console.log('IntroScreen');

    function goToRegister() {
        navigation.navigate('RegisterScreen');
    }

    function goToMain() {
        navigation.navigate('MainScreen');
    }

    return (
        <View style={styles.container}>
            <Background style={styles.background} />
            <View style={styles.header}>
                <View style={styles.logInContainer}>
                    <TouchableOpacity>
                        <Text style={styles.headerTextLog}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <TouchableOpacity onPress={goToRegister} >
                        <Text style={styles.headerTextRegister}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.title}>
                <Text style={[styles.text, styles.firstLine]}> Good to see </Text>
                <Text style={[styles.text, styles.secondLine]}> you again </Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.usernameInp}>
                    <Input text='Username'></Input>
                    <UserIcon width={24} height={24} />
                </View>
                <View style={styles.btnRegister}>
                    <Input text='Password'></Input>
                    <PasswordIcon width={24} height={24} />
                </View>
                <View style={styles.btnRegister}>
                    <TouchableOpacity onPress={goToMain}>
                        <Btn_intro text='Log in' backgroundColor='#0B844A' textColor='#FFFFFF' />
                    </TouchableOpacity>
                </View>
                <View style={styles.help}>
                    <Text style={styles.helpText}>Forgot Password?</Text>
                </View>
            </View>
        </View>
    );
}

export default React.memo(LogInScreen);
