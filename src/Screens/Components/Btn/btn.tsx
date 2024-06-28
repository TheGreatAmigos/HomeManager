import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

function Btn({ text, backgroundColor, width = 312, textColor, align = 'center', opacity = 1 }: { text: string, backgroundColor: string, textColor: string, width?: number | 312, align?: 'left' | 'center', opacity?: number | 1 }): React.ReactElement {
    return (
        <View>
            <View style={[styles.container, { width: width, backgroundColor: backgroundColor}]}>
                <Text style={[styles.text, { color: textColor, opacity: opacity  }]}>{text}</Text>
            </View>
        </View>
    );
}

export default React.memo(Btn);
