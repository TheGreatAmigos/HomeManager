import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

console.log(' conta: ' + (height - (0.95 * height)));
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        flexDirection: 'column',
    },
    iconContainer: {
        width: 50,
        height: 50,
        marginLeft: (width - 312) / 2,
        marginTop: (height - (0.95 * height)) / 2,
        borderWidth: 1,
    },
    textContainer: {
        marginTop: 17,
        borderWidth: 1,
        marginLeft: (width - 312) / 2,
        width: 311,
    },
    text1: {
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
        marginLeft: (width - 330) / 2,
        marginTop: 43,
    },
    subContainer: {
        marginTop: 18,
        borderWidth: 1,
        height: 247,
        width: 329,
        marginLeft: (width - 329) / 2,
    },
    textSubContainer: {
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
