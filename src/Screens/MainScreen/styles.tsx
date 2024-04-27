import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

console.log('Altura' + height);
console.log('Largura ' + width);
console.log(' conta: ' + (height - (0.95 * height)));
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        flexDirection: 'column',
    },
    iconContainer: {
        justifyContent: 'center',
        marginLeft: 31,
        marginTop: 37,
        borderColor: 'green',
    },
    textContainer: {
        marginTop: 17,
        borderColor: 'blue',
        marginLeft: 31,
        width: 311,
    },
    text1: {
        letterSpacing: -0.7,
        fontSize: 35,
        fontFamily: 'KumbhSans-Bold',
        color: '#34383E',
    },
    textOrientation: {
        flexDirection: 'row',
    },
    text2: {
        fontSize: 16,
        fontFamily: 'KumbhSans-SemiBold',
        color: '#0B844A',
    },
    text3: {
        fontSize: 16,
        fontFamily: 'KumbhSans-ExtraBold',
        color: '#0B844A',
        textDecorationLine: 'underline',
    },
    graphsContainer: {
        borderWidth: 1,
        height: 145,
        width: 330,
        marginLeft: 31,
        marginTop: 43,
    },
    subContainer: {
        marginTop: 5,
        borderWidth: 1,
        //height: 247,
        height: 205,
        width: 329,
        marginLeft: (width - 329) / 2,
    },
    textSubContainer: {
        marginTop: 10,
        fontSize: 12,
        fontFamily: 'KumbhSans-ExtraBold',
        color: '#334444',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    btnContainer: {
        marginTop: 12,
    }

});
