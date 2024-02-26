import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

function Input({ text}: { text: string}): React.ReactElement {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text}>{text}</TextInput>
        </View>
    );
}

export default React.memo(Input);


