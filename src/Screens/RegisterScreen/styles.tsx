import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log('Y total' + height);

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
    },
    header:{
        width: 314,
        height: 47,
        marginLeft: (width - 312)/2,
        marginTop: height - (0.92 * height),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerTextLog: {
        fontSize: 14,
        fontFamily: 'KumbhSans-Regular',
        color: '#FFFFFF',
    },
    headerTextRegister: {
        fontSize: 14,
        fontFamily: 'KumbhSans-ExtraBold',
        color: '#FFFFFF',
    },
    logInContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderColor: '#FFFFFF',
    },
    title: {
        marginTop: 54,
        width: 312,
        height: 84,
        alignItems: 'center',
        marginLeft: (width - 312)/2,
    },
    subContainer: {
        position: 'absolute',
        bottom: height - (0.92 * height), // Distance from the bottom
        left: (width - 311) / 2,
        flexDirection: 'column',
    },
    input: {
        marginTop: 10,
        width: 311,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    btnRegister: {
        marginTop: 10,
        width: 311,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        fontFamily: 'KumbhSans-SemiBold',
    },
    text: {
        fontSize: 48,
        fontFamily: 'KumbhSans-ExtraBold',
        color: '#FFFFFF',
    },
    help:{
        marginTop: 24,
        alignSelf: 'center',
    }, 
    helpText: {
        fontSize: 12,
        fontFamily: 'KumbhSans-Medium',
        color: '#FFFFFF',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    }
});