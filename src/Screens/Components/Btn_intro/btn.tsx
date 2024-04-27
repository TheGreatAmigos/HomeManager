import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

function Button({ text, backgroundColor, textColor, align='center', opacity = 1 }: { text: string, backgroundColor: string, textColor: string,  align?: 'left' | 'center', opacity?: number | 1 }): React.ReactElement {
    return (
        align === 'left' ?
            <View style={[styles.container, { backgroundColor: backgroundColor, }]}>
                <Text style={[styles.text, { color: textColor, marginLeft: 21, opacity: opacity }]}>{text}</Text>
            </View>
        :
            <View style={[styles.container, { backgroundColor: backgroundColor, alignItems: 'center' }]}>
                <Text style={[styles.text, { color: textColor, opacity: opacity }]}>{text}</Text>
            </View>
    );
}

export default React.memo(Button);
