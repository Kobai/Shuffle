import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet';
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";
import Card  from "./components/Card/Card";
import YouTube from 'react-youtube';


const client = Stitch.initializeDefaultAppClient('pennapps-mnfjh');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('data');

class App extends Component {
  constructor(props){
    super();
    this.state ={
        songNames: []
    };
  }
  getSongs(){
     db.collection("playlist")
    .find({}, {limit: 50})
    .asArray()
    .then(songs => this.setState({songNames: songs.name}))
    .then(()=>console.log(this.state.songNames))
    .catch(err => console.log(err));
  }

  componentDidMount(){
    client.auth
    .loginWithCredential(new AnonymousCredential())
    .then(this.getSong)
    .catch(console.error);
  }

  render() {
    const opts = {
      height: 700,
      width: 1100,
      playerVars: { autoplay: 1}
    };
    return (
      <div className="App">
        <Helmet>
          <style>{'body{background-color: #1B9CFC;}'}</style>
        </Helmet>
        <div className="App-header">
        </div>
          <YouTube
            className = "videoPlay"
            videoId="QoitiIbdeaM"
            opts={opts} />
        <div className="leftSide">
          Currently Playing: Fireflies
        </div>
        <div className="songChoice">
          <Card info={{img: "https://img.youtube.com/vi/QoitiIbdeaM/0.jpg",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
        </div>
      </div>
    );
  } 
}

export default App;
