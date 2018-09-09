import React from 'react';
import {
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native';

import { List, ListItem, SearchBar } from 'react-native-elements';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import {
  Stitch,
  UserPasswordCredential,
  RemoteMongoClient
} from 'mongodb-stitch-react-native-sdk';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import Header from '../common/Header.js';

class MusicScreen extends React.Component {
  constructor(props) {
    super(props);

    this.client = null;
    this.state = {
      data: [],
      isAuthenticated: false,
      user: null
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <Entypo name="folder-music" size={25} color="#03A9F4" />
  });

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    const client = await Stitch.initializeDefaultAppClient('pennapps-mnfjh'); //app ID
    const db = client
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db('data');
    this.client = client;

    const credential = new UserPasswordCredential(
      'raver1@pennapps.com',
      'password123'
    );
    //const user = await client.auth.loginWithCredential(credential);
    //this.setState({ user });

    db.collection('playlist')
      .find({}, { limit: 50 })
      .asArray()
      .then(songs => console.log(songs))
      .catch(err => console.log(err));

    console.disableYellowBox = true;
  }

  renderHeader = () => {
    return (
      <View>
        <SearchBar placeholder="Search music" darkTheme round />
        {this.renderFooter()}
      </View>
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  renderFooter = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          padding: 5,
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderColor: '#ddd',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Shuffle" />
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => (
            <Card>
              <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                  <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: item.image }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.headerContentStyle}>
                  <Text style={styles.headerTextStyle}>{item.title}</Text>
                  <Text style={{ marginTop: 10 }}>{item.artist}</Text>
                </View>
              </CardSection>
            </Card>
          )}
          keyExtractor={item => item.artist}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 22
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 100,
    flex: 1
  }
};
export default MusicScreen;
