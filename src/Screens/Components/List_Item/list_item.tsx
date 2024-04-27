import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import Background from '../../../assets/intro_background.svg';

function List_item({ text, textColor, align='center', opacity = 1 }: { text: string, textColor: string,  align?: 'left' | 'center', opacity?: number | 1 }): React.ReactElement {
    return (
        <View>
            <Background style={styles.background} />
            <View style={styles.container}>
                <Text style={[styles.text, { color: textColor, marginLeft: 21, opacity: opacity }]}>{text}</Text>
            </View>
        </View>
    );
}

export default React.memo(List_item);
