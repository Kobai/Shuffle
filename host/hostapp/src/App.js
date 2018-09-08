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
    return (
      <div className="App">
        <Helmet>
          <style>{'body{background-color: #1B9CFC;}'}</style>
        </Helmet>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Card info={{img: "https://i.imgur.com/kKp0ot7.png",songTitle: "hello", artist:"world"}}/>
      </div>
    );
  }
}

export default App;
