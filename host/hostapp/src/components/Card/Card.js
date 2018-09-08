import React, { Component } from 'react';
import './Card.css';
import playbutton from './playbutton.png';

class Card extends Component {
    render(){
        return (
            <div className="cardStyle">
                <div className="cardContent">
                    <img src={this.props.info.img} className="imgStyle" />
                    <img src={playbutton} className="playButton"/>
                    <div className = "textContainer">
                        <div className = "songTitle">{this.props.info.songTitle}</div>
                        <div className = "artist">{this.props.info.artist}</div>
                    </div>
                    <div className = "ranking">Votes: 12</div>
                </div>
            </div>
        );
    }
}

export default Card