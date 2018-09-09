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
import {
  Stitch,
  UserPasswordCredential,
  RemoteMongoClient
} from 'mongodb-stitch-react-native-sdk';

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
            labelStyle: { fontSize: 12 },
            style: {
              backgroundColor: '#cce7e8',
              paddingTop: 8
            },
            activeTintColor: '#620266'
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
  constructor(props) {
    super(props);

    this.client = null;
    this.state = {
      isAuthenticated: false,
      user: null
    };
  }

  async componentDidMount() {
    console.log('app.js');
    // const client = await Stitch.initializeDefaultAppClient('pennapps-mnfjh'); //app ID
    // const db = client
    //   .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
    //   .db('data');
    // this.client = client;
    //
    // if (client.auth.isLoggedIn) {
    //   const user = client.auth.user;
    //   this.setState({ user });
    // } else {
    //   const credential = new UserPasswordCredential(
    //     'raver1@pennapps.com',
    //     'password123'
    //   );
    //   const user = await client.auth.loginWithCredential(credential);
    //   this.setState({ user });
    // }
    // db.collection('playlist')
    //   .find({}, { limit: 50 })
    //   .asArray()
    //   .then(songs => console.log('app.js'))
    //   .catch(err => console.log(err));

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
