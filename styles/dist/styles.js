"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var AppStyles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme_1["default"].PRIMARY_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontWeight: "normal",
        fontSize: 30,
        color: theme_1["default"].PRIMARY_TEXT_COLOR,
        marginBottom: 40
    },
    inputView: {
        width: '80%',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: theme_1["default"].PRIMARY_TEXT_COLOR,
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
        color: theme_1["default"].SECONDARY_TEXT_COLOR
    },
    btn: {
        width: '80%',
        backgroundColor: theme_1["default"].PRIMARY_BUTTON_COLOR,
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'column'
    },
    googleButton: {
        width: '80%',
        backgroundColor: theme_1["default"].SECONDARY_BUTTON_COLOR,
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'column'
    },
    txt: {
        textTransform: 'capitalize',
        fontSize: theme_1["default"].DEFAULT_FONT_SIZE,
        color: theme_1["default"].PRIMARY_BUTTON_TEXT_COLOR
    }
});
exports["default"] = AppStyles;
