import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import {
  Stitch,
  UserPasswordCredential,
  RemoteMongoClient
} from 'mongodb-stitch-browser-sdk';
import Card from './components/Card/Card';
import YouTube from 'react-youtube';

const client = Stitch.initializeDefaultAppClient('pennapps-mnfjh');
const db = client
  .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
  .db('data');

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      songData: [],
      currentSongName: 'None being played',
      currentSongId: ''
    };
    this.getSongs = this.getSongs.bind(this);
  }

  updateCurrentSong = song => {
    console.log(song);
    this.setState({ currentSongName: song.name }).catch(err =>
      console.log(err)
    );
  };
  renderSongList() {
    this.state.songData = this.state.songData.sort(function(a, b) {
      if (a.vote_count > b.vote_count) {
        return -1;
      } else if (a.vote_count < b.vote_count) {
        return 1;
      } else {
        return a.title > b.title ? -1 : 1;
      }
    });
    return this.state.songData.map((data, index) => (
      <Card
        info={data}
        key={index}
        updateCurrentSong={this.updateCurrentSong}
      />
    ));
  }
  getSongs() {
    db.collection('playlist')
      .find({}, { limit: 50 })
      .asArray()
      .then(songs => this.setState({ songData: songs[0].songs }))
      .then(this.renderSongList())
      .catch(err => console.log(err));
  }

  componentDidMount() {
    console.log(this.state.currentSongName);
    const credentials = new UserPasswordCredential(
      'dj@pennapps.com',
      'password123'
    );
    client.auth
      .loginWithCredential(credentials)
      .then(this.getSongs)
      .catch(console.error);
  }

  render() {
    const opts = {
      height: 700,
      width: 1100,
      playerVars: { autoplay: 1 }
    };
    return (
      <div className="App">
        <Helmet>
          <style>{'body{background-color: #1B9CFC;}'}</style>
        </Helmet>
        <div className="App-header" />
        <YouTube className="videoPlay" videoId="" opts={opts} />
        <div className="leftSide">
          Currently Playing: {this.state.currentSong}
        </div>
        <div className="songChoice">{this.renderSongList()}</div>
      </div>
    );
  }
}

export default App;
