"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../../../styles/styles");
var TextInputView = function (_a) {
    var onChange = _a.onChange, type = _a.type, placehoder = _a.placehoder, secureTextEntry = _a.secureTextEntry;
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].inputView },
        react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss, accessible: false },
            react_1["default"].createElement(react_native_1.TextInput, { style: styles_1["default"].inputText, placeholder: placehoder, placeholderTextColor: styles_1["default"].placehoderColor.color, onChangeText: function (text) { return onChange(text); }, keyboardType: type, secureTextEntry: secureTextEntry }))));
};
exports["default"] = TextInputView;
