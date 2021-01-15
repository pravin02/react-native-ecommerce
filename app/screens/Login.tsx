import React from 'react';

import { TextInput, TouchableOpacity, View, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppStyles from '../../styles/styles';
import TextInputView from './components/TextInputView';


type State = {
    mobile: string
}

type Props = {
}

class Login extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            mobile: ''
        }
    }

    validate(): boolean {
        if (this.state.mobile === '') {
            Alert.alert('Validation Message', `Please enter valid mobile number`);
            return false;
        }
        return true;
    }

    onLoginClicked = () => {
        if (this.validate()) {
            Alert.alert('Message', `email ${this.state.mobile}`);
        }
    }

    render() {
        return (
            <>
                <View style={AppStyles.container}>
                    <Text style={AppStyles.logo}>
                        Login / Signup
                    </Text>
                    <TextInputView
                        placehoder="Enter your mobile number"
                        type="number-pad"
                        onChange={(text) => this.setState({ mobile: text })} />

                    <TouchableOpacity>
                        <Text style={AppStyles.forgot}>
                            Forgot Password?
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={AppStyles.btn}
                        onPress={() => this.onLoginClicked()}>
                        <Text style={AppStyles.txt}>
                            Login
                      </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
};

export default Login;
