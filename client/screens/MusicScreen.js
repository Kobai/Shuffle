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
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import Header from '../common/Header.js';

class MusicScreen extends React.Component {
  state = {
    data: [],
    modalVisible: false
  };
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings'
    // tabBarIcon: () => <Entypo name="folder-music" size={25} color="#03A9F4" />
  });

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
      >
        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <MaterialIcons name="add" size={40} />
        </Button>
      </View>
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
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
