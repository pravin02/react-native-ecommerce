"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../../styles/styles");
var TextInputView_1 = require("./components/TextInputView");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.onLoginClicked = function () {
            if (_this.validate()) {
                react_native_1.Alert.alert('Message', "email " + _this.state.mobile);
            }
        };
        _this.state = {
            mobile: ''
        };
        return _this;
    }
    Login.prototype.validate = function () {
        if (this.state.mobile === '') {
            react_native_1.Alert.alert('Validation Message', "Please enter valid mobile number");
            return false;
        }
        return true;
    };
    Login.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].logo }, "Login / Signup"),
                react_1["default"].createElement(TextInputView_1["default"], { placehoder: "Enter your mobile number", type: "number-pad", onChange: function (text) { return _this.setState({ mobile: text }); } }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].forgot }, "Forgot Password?")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1["default"].btn, onPress: function () { return _this.onLoginClicked(); } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].txt }, "Login")))));
    };
    return Login;
}(react_1["default"].Component));
;
exports["default"] = Login;
