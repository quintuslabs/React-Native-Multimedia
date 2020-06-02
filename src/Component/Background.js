import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import bgSrc from './assets/background.png';

export default class Wallpaper extends Component {
    render() {
        return (
            <ImageBackground style={styles.picture} source={bgSrc}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
