import React from 'react';

import { StyleSheet, TextInput, TouchableOpacity, View, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppStyles from '../../styles/styles';
import TextInputView from './components/TextInputView';


type State = {
    email: string,
    otp: string
}

type Props = {
}

class Otp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            otp: ''
        }

    }

    validate(): boolean {
        if (this.state.otp === '') {
            Alert.alert('Validation Message',
                `Please enter OTP`);
            return false;
        }

        return true;
    }
    onVerifyClicked = () => {
        if (this.validate()) {
            Alert.alert('Message', `Entered OTP is - ${this.state.otp}`);
        }
    }

    render() {
        return (
            <>
                <View style={AppStyles.container}>
                    <Text style={AppStyles.logo}>
                        OTP Screen
                    </Text>
                    <TextInputView
                        placehoder="Enter your OTP.."
                        type="number-pad"
                        onChange={(text) => this.setState({ otp: text })} />

                    <TouchableOpacity style={AppStyles.btn}
                        onPress={() => this.onVerifyClicked()}>
                        <Text style={AppStyles.txt}>
                            Verify
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={AppStyles.forgot}>
                            Resend OTP?
                      </Text>
                    </TouchableOpacity>

                </View>
            </>
        );
    }
};

export default Otp;
