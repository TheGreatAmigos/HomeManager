import React from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "./styles";

import BtnIcon from "../../../assets/Btn_arrow.svg";
import Background from '../../../assets/btn_background.svg';

const { width, height } = Dimensions.get('window');

function List_item({ text, textColor, width = 312, height = 42, opacity = 1 }: { text: string, textColor: string, opacity?: number | 1, width?: number | 312, height?: number | 42 }): React.ReactElement {
    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <Background style={styles.background} />
            <View style={{ flexDirection: 'row' }}>
                <View style={{flex:1}}>
                    <Text style={[styles.text, { color: textColor, opacity: opacity }]}>{text}</Text>
                </View>
                <View style={[styles.icon,{ marginRight: (width* 0.04 )}]}>
                    <BtnIcon />
                </View>


            </View>
        </View>
    );
}

export default React.memo(List_item);
