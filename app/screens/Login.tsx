import React from 'react';

import { TouchableOpacity, View, Text, Alert, Image } from 'react-native';

import AppStyles from '../../styles/styles';
import TextInputView from './components/TextInputView';

import googleLogo from '../assets';


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

    onGoogleLoginClicked = () => {
        Alert.alert('Message', 'Google login yet to be implemented');
    }

    onFacebookLoginClicked = () => {
        Alert.alert('Message', 'Facebook login yet to be implemented');
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

                    <Text> --------------- OR --------------- </Text>


                    <TouchableOpacity style={AppStyles.googleButton}
                        onPress={() => this.onGoogleLoginClicked()}>
                        <Image
                            style={{
                                width: '60%', height: '60%', resizeMode: 'contain',
                                flexWrap: 'wrap', alignContent: 'flex-start'
                            }}
                            source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }} />
                        <Text style={AppStyles.txt}>
                            Login with Google
                      </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={AppStyles.btn}
                        onPress={() => this.onFacebookLoginClicked()}>
                        <Image
                            style={{
                                width: '60%', height: '60%', resizeMode: 'contain',
                                flexWrap: 'wrap', alignContent: 'flex-start'
                            }}
                            source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }} />
                        <Text style={AppStyles.txt}>
                            Login with Facebook
                      </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
};

export default Login;
