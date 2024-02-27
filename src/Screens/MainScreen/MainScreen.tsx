import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

import Btn_intro from '../Components/Btn_intro/btn.tsx';

function MainScreen({ navigation }: any): React.ReactElement {
    console.log('MainScreen');

    function goToLogin() {
        navigation.navigate('LogInScreen');
    }

    function goToRegister() {
        navigation.navigate('RegisterScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}></View>
            <View style={styles.textContainer}>
                <Text style={styles.text1}> Hello, António</Text>
                <View style={styles.textOrientation}>
                    <Text style={styles.text2}> You have </Text>
                    <Text style={styles.text3}>6 notifications</Text>
                </View>
            </View>
            <View style={styles.graphsContainer}></View>
            <View style={styles.subContainer}>
                <Text style={styles.textSubContainer}> My Houses</Text>
                <View style={{ borderWidth: 1, height: 250, marginTop:12}}>
                    <FlatList
                        data={[
                            { key: 'Almada' },
                            { key: 'Lisboa' },
                            { key: 'Alentejo' },
                            { key: 'Alentejo1' },
                            { key: 'Alentejo2' },
                            { key: 'Alentejo3' },
                        ]}
                        renderItem={({ item }) => <Btn_intro text={item.key} backgroundColor='#0B844A' textColor='#FFFFFF' align="left" />}
                        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    />
                    <View style={styles.btnContainer}>
                        <Btn_intro text='Add House' textColor="#334444" backgroundColor="#D9D9D9" align="left"/>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(MainScreen);
