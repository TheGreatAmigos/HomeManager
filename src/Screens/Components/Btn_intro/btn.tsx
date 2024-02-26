import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

function Button({ text, backgroundColor, textColor }: { text: string, backgroundColor: string, textColor: string }): React.ReactElement {
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>
        </View>
    );
}

export default React.memo(Button);


