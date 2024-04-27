import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

console.log( ' conta: '+ (height - (0.08 * height)));
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    title: {
        position: 'absolute',
        top: (0.30 * height),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        position: 'absolute',
        bottom: (0.116 * height), // Distance from the bottom
        left: (width - 311) / 2,
        flexDirection: 'column',
    },
    btnRegister: {
        marginTop: 10,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        flex:1,
    }
});