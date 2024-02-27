import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

console.log( ' conta: '+ (height - (0.08 * height)));
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#02B75F',
    },
    title: {
        position: 'absolute',
        top: height - (0.70 * height),
        alignSelf: 'center',
        width: 268,
        height: 119
    },
    subContainer: {
        position: 'absolute',
        bottom: height - (0.87 * height), // Distance from the bottom
        left: (width - 311) / 2,
        flexDirection: 'column',
    },
    btnRegister: {
        marginTop: 10,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    }
});