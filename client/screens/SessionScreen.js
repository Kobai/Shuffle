import Header from '../common/Header.js';
import SessionForm from '../components/login/SessionForm';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default class SessionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => (
      <MaterialIcons name="group-add" size={25} color="#03A9F4" />
    )
  });
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../images/penn.png')} />
          <Text style={styles.title}>Join a Session</Text>
        </View>
        <View style={styles.formContainer}>
          <SessionForm setName={name => this.props.setName(name)} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    opacity: 0.9
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 35
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: '#FFF',
    marginTop: 30,
    width: 160,
    textAlign: 'center',
    fontSize: 25
  },
  joinContainer: {
    paddingVertical: 12,
    marginBottom: 15
  }
};
