import React, { Component } from 'react';
import './Card.css';
import playbutton from './playbutton.png';

class Card extends Component {
    handleClick = (e) =>{
        e.preventDefault();
        let song = {id: this.props.info.youtube_link.split('=')[1], name: this.props.info.title};
        this.props.updateCurrentSong(song);
    }
    render(){
        return (
            <div className="cardStyle">
                <div className="cardContent">
                    <img src={"https://img.youtube.com/vi/"+this.props.info.youtube_link.split('=')[1]+"/0.jpg"} className="imgStyle" />
                    <img src={playbutton} className="playButton" onClick = {this.handleClick} style={{cursor: "pointer"}}/>
                    <div className = "textContainer">
                        <div className = "songTitle">{this.props.info.title}</div>
                        <div className = "artist">{this.props.info.artist}</div>
                    </div>
                    <div className = "ranking">Votes: {this.props.info.vote_count}</div>
                </div>
            </div>
        );
    }
}

export default Card