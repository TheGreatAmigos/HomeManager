import React from "react";
import { View, Text, Pressable, FlatList, Dimensions } from "react-native";
import { styles } from "./styles";

import List_Item from '../Components/List_Item/list_item.tsx';
import Btn_intro from '../Components/Btn/btn.tsx';

import UserIcon from "../../assets/UserIconMP.svg";

import PieChart from 'react-native-pie-chart';



function MainScreen({ navigation }: any): React.ReactElement {
    console.log('MainScreen');

    const { width, height } = Dimensions.get('window');

    function goToLogin() {
        navigation.navigate('LogInScreen');
    }

    function goToRegister() {
        navigation.navigate('RegisterScreen');
    }

    const widthAndHeight = 140
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <UserIcon width={width * 0.13} height={height * 0.075}></UserIcon>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Hello, António</Text>
                <View style={styles.textOrientation}>
                    <Text style={styles.text2}> You have </Text>
                    <Text style={styles.text3}>6 notifications</Text>
                </View>
            </View>
            <View style={styles.graphsContainer}>
                <View style={styles.graphLeft}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.45}
                        coverFill={'#FFF'}
                    />
                </View>
                <View style={styles.graphRight}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.45}
                        coverFill={'#FFF'}
                    />
                </View>

            </View>
            <View style={styles.subContainer}>
                <Text style={styles.textSubContainer}> My 5 Houses </Text>
                <View style={{ height: 206, marginTop: 12}}>
                    <FlatList
                        data={[
                            { key: 'Almada' },
                            { key: 'Lisboa' },
                            { key: 'Alentejo' },
                            { key: 'Alentejo1' },
                            { key: 'Alentejo2' },
                        ]}
                        renderItem={({ item }) => (
                            <Pressable onPress={goToLogin}>
                                <List_Item text={item.key} textColor="#FFFFFF" width={width * 0.83}></List_Item>
                            </Pressable>
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 13, backgroundColor: 'transparent' }} />}
                        initialNumToRender={3}
                        maxToRenderPerBatch={3}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={styles.btnContainer}>
                        <Btn_intro text='Add House' textColor="#334444" backgroundColor="#D9D9D9" opacity={0.5} width={width * 0.83} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(MainScreen);
