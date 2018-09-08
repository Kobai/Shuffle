import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import MusicScreen from './screens/MusicScreen';
import QRScreen from './screens/QRScreen';

const MainNavigator = createStackNavigator({
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  main: {
    screen: createBottomTabNavigator(
      {
        Music: { screen: MusicScreen },
        Share: { screen: QRScreen }
      },
      {
        navigationOptions: {
          tabBarVisible: true,
          tabBarPosition: 'bottom',
          animationEnabled: true,
          swipeEnabled: true,
          tabBarOptions: {
            showIcon: true,
            labelStyle: {
              fontSize: 10
            },
            style: {
              paddingTop: 10
            },
            tabStyle: {
              height: 49
            },
            iconStyle: {
              flexGrow: 0,
              marginTop: 10
            }
          }
        }
      }
    )
  }
});

export default class App extends React.Component {
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
