import React from 'react';
import { View, Text } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import Header from '../common/Header.js';

export default class SessionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings'
    // tabBarIcon: () => <Entypo name="slideshare" size={25} color="#03A9F4" />
  });
  render() {
    return (
      <View>
        <Header headerText="PennBook" />
        <Text>SessionScreen</Text>
        <Text>SessionScreen</Text>
        <Text>SessionScreen</Text>
        <Text>SessionScreen</Text>
        <Text>SessionScreen</Text>
      </View>
    );
  }
}
