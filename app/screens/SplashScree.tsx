import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

type Props = {

}

type State = {
    visible: boolean
}

export default class SplashScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    hideSplashScreen = () => {
        this.setState({
            visible: false
        });
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                visible: false
            });
        }, 10000);
    }

    getSplashScreeView(): React.ReactNode {
        return (
            <View style={styles.rootView}>
                <View style={styles.childView}>
                    <Image
                        style={styles.splashImage}
                        source={{ uri: 'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png' }} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                { this.state.visible ? this.getSplashScreeView() : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    rootView: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    childView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4'
    },
    splashImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }

})
