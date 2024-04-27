import React from "react";
import { View, Text, Pressable, FlatList, Dimensions } from "react-native";
import { styles } from "./styles";

import List_Item from '../Components/List_Item/list_item.tsx';
import Btn_intro from '../Components/Btn_intro/btn.tsx';

import UserIcon from "../../assets/UserIconMP.svg";



function MainScreen({ navigation }: any): React.ReactElement {
    console.log('MainScreen');

    const { width, height } = Dimensions.get('window');

    function goToLogin() {
        navigation.navigate('LogInScreen');
    }

    function goToRegister() {
        navigation.navigate('RegisterScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <UserIcon width={width* 0.13} height={height * 0.075}></UserIcon>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Hello, António</Text>
                <View style={styles.textOrientation}>
                    <Text style={styles.text2}> You have </Text>
                    <Text style={styles.text3}>6 notifications</Text>
                </View>
            </View>
            <View style={styles.graphsContainer}></View>
            <View style={styles.subContainer}>
                <Text style={styles.textSubContainer}> My Houses</Text>
                <View style={{ borderWidth: 1, borderColor: 'green', height: 206, marginTop:12, margin:0}}>
                    <FlatList
                        data={[
                            { key: 'Almada' },
                            { key: 'Lisboa' },
                            { key: 'Alentejo' },
                            { key: 'Alentejo1' },
                        ]}
                        renderItem={({ item }) => (
                            <View>
                               <Pressable onPress={goToLogin}>
                                    <List_Item text= {item.key} textColor="White"></List_Item>
                            
                                </Pressable>
                            </View>
                          )}
                        ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
                        
                        initialNumToRender={3}
                        maxToRenderPerBatch={3}
                    />
                    <View style={styles.btnContainer}>
                        <Btn_intro text='Add House' textColor="#334444" backgroundColor="#D9D9D9" align="left" opacity={0.5}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(MainScreen);
