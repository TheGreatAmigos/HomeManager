import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: 312,
        height: 42,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 17,
        fontFamily: 'KumbhSans-Bold',
        paddingStart: 12,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        flex:1,
    }
});