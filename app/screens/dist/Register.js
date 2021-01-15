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
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register(props) {
        var _this = _super.call(this, props) || this;
        _this.onRegisterClicked = function () {
            if (_this.validate()) {
                react_native_1.Alert.alert('Message', "email " + _this.state.email + ", password " + _this.state.password);
            }
        };
        _this.state = {
            email: '',
            password: ''
        };
        return _this;
    }
    Register.prototype.validate = function () {
        if (this.state.email === '') {
            react_native_1.Alert.alert('Validation Message', "Please enter valid email");
            return false;
        }
        if (this.state.password === '') {
            react_native_1.Alert.alert('Validation Message', "Please enter valid password");
            return false;
        }
        return true;
    };
    Register.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].logo }, "Register"),
                react_1["default"].createElement(TextInputView_1["default"], { placehoder: "Enter your email..", type: "email-address", onChange: function (text) { return _this.setState({ email: text }); } }),
                react_1["default"].createElement(TextInputView_1["default"], { placehoder: "Enter your password...", type: "ascii-capable", secureTextEntry: true, onChange: function (text) { return _this.setState({ password: text }); } }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].forgot }, "Already having an Account?")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1["default"].btn, onPress: function () { return _this.onRegisterClicked(); } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].txt }, "Register")))));
    };
    return Register;
}(react_1["default"].Component));
;
exports["default"] = Register;
