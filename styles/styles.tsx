import { StyleSheet } from "react-native";
import theme from './theme';


const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontWeight: "normal",
        fontSize: 30,
        color: theme.PRIMARY_TEXT_COLOR,
        marginBottom: 40
    },
    inputView: {
        width: '80%',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: theme.PRIMARY_TEXT_COLOR,
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50
    },
    placehoderColor: { color: '#003f5c' },
    forgot: {
        fontSize: 13,
        color: theme.SECONDARY_TEXT_COLOR,
    },
    btn: {
        width: '80%',
        backgroundColor: theme.PRIMARY_BUTTON_COLOR,
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    txt: {
        textTransform: 'capitalize',
        fontSize: theme.DEFAULT_FONT_SIZE,
        color: theme.PRIMARY_BUTTON_TEXT_COLOR
    }
});

export default AppStyles;
