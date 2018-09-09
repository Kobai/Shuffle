import React, { Component } from 'react';
import './BigCard.css';

class BigCard extends Component {
    constructor(){
        super();
        this.state={
            newSongTitle:'',
            newSongArtist:'',
            newSongLink:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        let newSong = {link: this.state.newSongLink, title: this.state.newSongTitle, artist: this.state.newSongArtist};
        this.props.addSong(newSong);
    }
    render(){
        return (
            <div className="cardStyle">
                <div style={{fontSize: "1.2rem", textAlign: "center", marginBottom: "10px"}}>Need Another Song?</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newSongTitle" onChange={this.onChange} placeholder="Enter Song Title" className="textStyle"/> <br />
                    <input type="text" name="newSongArtist" onChange={this.onChange} placeholder="Enter Song Artist" className="textStyle"/> <br />
                    <input type="text" name="newSongLink" onChange={this.onChange} placeholder="Enter YouTube Link for the Song" className="textStyle"/> <br />
                    <input type="submit" value="Submit" className="buttonStyle"/>
                </form>
            </div>
        );
    }
}


export default BigCard