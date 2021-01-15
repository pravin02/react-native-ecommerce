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
var Otp = /** @class */ (function (_super) {
    __extends(Otp, _super);
    function Otp(props) {
        var _this = _super.call(this, props) || this;
        _this.onVerifyClicked = function () {
            if (_this.validate()) {
                react_native_1.Alert.alert('Message', "Entered OTP is - " + _this.state.otp);
            }
        };
        _this.state = {
            email: '',
            otp: ''
        };
        return _this;
    }
    Otp.prototype.validate = function () {
        if (this.state.otp === '') {
            react_native_1.Alert.alert('Validation Message', "Please enter OTP");
            return false;
        }
        return true;
    };
    Otp.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].logo }, "OTP Screen"),
                react_1["default"].createElement(TextInputView_1["default"], { placehoder: "Enter your OTP..", type: "number-pad", onChange: function (text) { return _this.setState({ otp: text }); } }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1["default"].btn, onPress: function () { return _this.onVerifyClicked(); } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].txt }, "Verify")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].forgot }, "Resend OTP?")))));
    };
    return Otp;
}(react_1["default"].Component));
;
exports["default"] = Otp;
