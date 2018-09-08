import React from 'react';
import { View, Text } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default class QRScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <Entypo name="slideshare" size={30} color="#1b3039" />
  });
  render() {
    return (
      <View>
        <Text>QRScreen</Text>
        <Text>QRScreen</Text>
        <Text>QRScreen</Text>
        <Text>QRScreen</Text>
        <Text>QRScreen</Text>
      </View>
    );
  }
}
