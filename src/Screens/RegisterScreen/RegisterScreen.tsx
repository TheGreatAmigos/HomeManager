import React from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native"; // Import Text component
import { styles } from "./styles.tsx";
import Btn_intro from '../Components/Btn_intro/btn.tsx';
import { Dimensions } from 'react-native';
import Input from "../Components/Txt_input/input.tsx";

import UserIcon from "../../assets/userIcon.svg";
import PasswordIcon from "../../assets/passwordIcon.svg";
import MailIcon from "../../assets/mailIcon.svg";
import Background from '../../assets/intro_background.svg';

const { width, height } = Dimensions.get('window');

function RegisterScreen({ navigation }: any): React.ReactElement {
    console.log('IntroScreen');

    function goToLogin() {
        navigation.navigate('LogInScreen');
    }

    return (
        <View style={styles.container}>
            <Background style={styles.background} />
            <View style={styles.header}>
                <View style={styles.logInContainer}>
                    <TouchableOpacity onPress={goToLogin}>
                        <Text style={styles.headerTextLog}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.headerTextRegister}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.title}>
                <Text style={styles.text}> Nice to </Text>
                <Text style={styles.text}> meet you </Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.input}>
                    <Input text='Username'></Input>
                    <UserIcon width={24} height={24} style={{ marginRight: 10 }} />
                </View>
                <View style={styles.input}>
                    <Input text='Email Address'></Input>
                    <MailIcon width={24} height={24} style={{ marginRight: 10 }} />
                </View>
                <View style={styles.input}>
                    <Input text='Password'></Input>
                    <PasswordIcon width={24} height={24} style={{ marginRight: 10 }} />
                </View>
                <View style={styles.input}>
                    <Input text='Confirm Password'></Input>
                    <PasswordIcon width={24} height={24} />
                </View>
                <View style={styles.btnRegister}>
                    <Btn_intro text='Create Account' backgroundColor='#0B844A' textColor='#FFFFFF' />
                </View>
                <View style={styles.help}>
                    <Text style={styles.helpText}>Or continue with Google</Text>
                </View>
            </View>
        </View>
    );
}

export default React.memo(RegisterScreen);
