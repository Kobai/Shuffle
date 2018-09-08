import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  TabBarBottom
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import MusicScreen from './screens/MusicScreen';
import SessionScreen from './screens/SessionScreen';
import LoginScreen from './screens/LoginScreen';
import RegScreen from './screens/RegScreen';

const MainNavigator = createBottomTabNavigator(
  {
    welcome: {
      screen: WelcomeScreen
    },
    auth: { screen: LoginScreen },
    reg: { screen: RegScreen },
    main: {
      screen: createBottomTabNavigator(
        {
          Session: { screen: SessionScreen },
          Music: { screen: MusicScreen }
        },
        {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        }
      )
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    lazyLoad: true
  }
);

export default class App extends React.Component {
  componentWillMount() {
    console.disableYellowBox = true;
  }
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
