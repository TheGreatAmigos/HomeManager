import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
    },
    header:{
        width: 314,
        height: 47,
        marginLeft: (width - 312)/2,
        marginTop: (0.05 * height),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerTextLog: {
        fontSize: 14,
        fontFamily: 'KumbhSans-ExtraBold',
        color: '#FFFFFF',
    },
    headerTextRegister: {
        fontSize: 14,
        fontFamily: 'KumbhSans-Regular',
        color: '#FFFFFF',
    },
    logInContainer: {
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 3,
        justifyContent: 'center',
        borderColor: '#FFFFFF',
    },
    registerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 100,
        width: 312,
        height: 84,
        alignItems: 'center',
        fontWeight: 'normal',
        marginLeft: (width - 312)/2,
    },
    subContainer: {
        position: 'absolute',
        bottom: (0.075 * height), // Distance from the bottom
        left: (width - 311) / 2,
        flexDirection: 'column',
    },
    usernameInp: {
        width: 311,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    btnRegister: {
        marginTop: 10,
        width: 311,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text: {
        fontSize: 48,
        fontFamily: 'KumbhSans-ExtraBold',
        color: '#FFFFFF',
    },
    help:{
        marginTop: 18,
        alignSelf: 'center',
    }, 
    helpText: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    firstLine: {
        marginBottom: -5,
    },
    secondLine:{
        marginTop: -12,
    }
});