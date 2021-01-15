import React from 'react';

import { TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppStyles from '../../../styles/styles';

type Props = {
    type: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined,
    placehoder: string,
    onChange: (text: string) => void,
    secureTextEntry?: boolean
}

const TextInputView = ({ onChange, type, placehoder, secureTextEntry }: Props) => {
    return (
        <View style={AppStyles.inputView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <TextInput
                    style={AppStyles.inputText}
                    placeholder={placehoder}
                    placeholderTextColor={AppStyles.placehoderColor.color}
                    onChangeText={text => onChange(text)}
                    keyboardType={type}
                    secureTextEntry={secureTextEntry}
                />
            </TouchableWithoutFeedback>
        </View>
    );
}

export default TextInputView;
