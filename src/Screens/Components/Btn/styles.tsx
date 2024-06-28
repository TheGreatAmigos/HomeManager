import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        width: 312,
        height: 42,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'KumbhSans-Bold',
        paddingStart: (width* 0.04),
    },
});