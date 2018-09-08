import React from 'react';
import { View, Text } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default class MusicScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <Entypo name="folder-music" size={30} color="#1b3039" />
  });
  render() {
    return (
      <View>
        <Text>MusicScreen</Text>
        <Text>MusicScreen</Text>
        <Text>MusicScreen</Text>
        <Text>MusicScreen</Text>
        <Text>MusicScreen</Text>
      </View>
    );
  }
}
