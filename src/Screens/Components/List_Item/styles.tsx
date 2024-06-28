import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        height: 42,
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontFamily: 'KumbhSans-Bold',
        paddingStart: (width* 0.04),
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        flex:1,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
    }
    
});