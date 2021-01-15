import React from 'react';

import { TouchableOpacity, View, Text, Alert } from 'react-native';
import AppStyles from '../../styles/styles';
import TextInputView from './components/TextInputView';


type State = {
    email: string,
    password: string
}

type Props = {
}


class Register extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    validate(): boolean {
        if (this.state.email === '') {
            Alert.alert('Validation Message', `Please enter valid email`);
            return false;
        }
        if (this.state.password === '') {
            Alert.alert('Validation Message', `Please enter valid password`);
            return false;
        }
        return true;
    }

    onRegisterClicked = () => {
        if (this.validate()) {
            Alert.alert('Message', `email ${this.state.email}, password ${this.state.password}`);
        }
    }

    render() {
        return (
            <>
                <View style={AppStyles.container}>
                    <Text style={AppStyles.logo}>
                        Register
                    </Text>

                    <TextInputView
                        placehoder="Enter your email.."
                        type="email-address"
                        onChange={(text) => this.setState({ email: text })} />

                    <TextInputView
                        placehoder="Enter your password..."
                        type="ascii-capable"
                        secureTextEntry={true}
                        onChange={(text) => this.setState({ password: text })} />


                    <TouchableOpacity>
                        <Text style={AppStyles.forgot}>
                            Already having an Account?
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={AppStyles.btn}
                        onPress={() => this.onRegisterClicked()}>
                        <Text style={AppStyles.txt}>
                            Register
                      </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
};

export default Register;
