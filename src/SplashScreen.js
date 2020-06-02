import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Background from './Component/Background';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(() => {
                    resolve('result');
                },
                4000,
            ),
        );
    };

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this._loadInitialState().done();
        }
    }

    _loadInitialState = async () => {
        this.props.navigation.navigate('Main');
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#283f78' barStyle="light-content"/>
                <Background style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textContainer}> Getting Started With React Native MultiMedia</Text>
                </Background>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: '700',
    },
});
