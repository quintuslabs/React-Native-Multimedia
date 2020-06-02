import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../src/SplashScreen';
import MainScreen from './BottomTab';

export const MainNavigator = createSwitchNavigator({
    Welcome: {screen: SplashScreen},
    Main: {screen: MainScreen},
});

export default createAppContainer(MainNavigator);
