import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TextScreen from '../src/TextScreen';
import ImageScreen from '../src/Imagess';
import AudioScreen from '../src/AudioScreen';
import VideoScreen from '../src/VideoScreen';

const Navigator = createBottomTabNavigator({
    TextScreen: {
        screen: TextScreen,
        navigationOptions: () => ({
            tabBarLabel: 'Text',
            tabBarOptions: {
                activeTintColor: '#4caf4e',
                defaultTintColor: '#283f78',
                labelStyle: {
                    fontSize: 14,
                    marginTop: -30,
                },
                style: {
                    height: 70,
                },
            },
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image
                            style={{height: 30, width: 30, marginTop: -20}}
                            source={require('../src/Component/assets/TextActive.png')}
                        />
                    );
                } else {
                    return (
                        <Image
                            style={{height: 30, width: 30, marginTop: -20}}
                            source={require('../src/Component/assets/TextInactive.png')}
                        />
                    );
                }
            },
        }),
    },

    ImageScreen: {
        screen: ImageScreen,
        navigationOptions: () => ({
            tabBarLabel: 'Images',
            tabBarOptions: {
                activeTintColor: '#4caf4e',
                defaultTintColor: '#283f78',
                labelStyle: {
                    fontSize: 14,
                    marginTop: -30,
                },
                style: {
                    height: 70,
                },
            },
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image
                            style={{height: 30, width: 30, marginTop: -20}}
                            source={require('../src/Component/assets/ImageActive.png')}
                        />
                    );
                } else {
                    return (
                        <Image
                            style={{height: 30, width: 30, marginTop: -20}}
                            source={require('../src/Component/assets/ImageInactive.png')}
                        />
                    );
                }
            },
        }),
    },

    AudioScreen: {
        screen: AudioScreen,
        navigationOptions: () => ({
            tabBarLabel: 'Audio',
            tabBarOptions: {
                activeTintColor: '#4caf4e',
                defaultTintColor: '#283f78',
                labelStyle: {
                    fontSize: 14,
                    marginTop: -30,
                },
                style: {
                    height: 70,
                },
            },
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image
                            style={{height: 30, width: 30, marginTop: -20}}
                            source={require('../src/Component/assets/Audioactive.png')}
                        />
                    );
                } else {
                    return (
                        <Image
                            style={{height: 30, width: 30, marginTop: -20}}
                            source={require('../src/Component/assets/AudioInactive.png')}
                        />
                    );
                }
            },
        }),
    },

    VideoScreen: {
        screen: VideoScreen,
        navigationOptions: () => ({
            tabBarLabel: 'Videos',
            tabBarOptions: {
                activeTintColor: '#4caf4e',
                defaultTintColor: '#283f78',
                labelStyle: {
                    fontSize: 14,
                    marginTop: -30,
                },
                style: {
                    height: 70,
                },
            },
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image
                            style={{height: 35, width: 35, marginTop: -20}}
                            source={require('../src/Component/assets/VideoActive.png')}
                        />
                    );
                } else {
                    return (
                        <Image
                            style={{height: 35, width: 35, marginTop: -20}}
                            source={require('../src/Component/assets/VideoInactive.png')}
                        />
                    );
                }
            },
        }),
    },
});

export default createAppContainer(Navigator);
