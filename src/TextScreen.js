import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Back from '../src/Component/ScreenBackground';

const TextHeader = 'React Native';
const TextData = 'React Native is a framework for building native applications using JavaScript. React Native compiles to native app components, which makes it possible for you to build native mobile applications. In React JS, React is the base abstraction of React DOM for the web platform, while with React Native, React is still the base abstraction but of React Native. So the syntax and workflow remain similar, but the components are different.';

export default class TextScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Back>
                    <Text
                        style={{
                            padding: 16,
                            fontSize: 20,
                            color: 'white',
                            backgroundColor: 'green',
                        }}>
                        Text
                    </Text>
                    <View style={styles.textContainer}>
                        <View style={styles.textDetails}>
                            <Text style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 16,
                                fontWeight: '500',
                            }}>
                                {TextHeader}
                            </Text>
                            <Text style={{
                                justifyContent: 'center', alignItems: 'center', fontSize: 14, marginTop: 15,
                                marginLeft: 8, marginRight: 8,
                            }}>
                                {TextData}
                            </Text>
                        </View>
                    </View>
                </Back>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        marginTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDetails: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
