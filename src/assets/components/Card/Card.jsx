import React, { useState } from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };
    };
    handleChange = () => {
        this.setState({ pressed: !this.state.pressed });
    }
    render() {
        const { id, english, transcription, russian } = this.props;
        return (
            <div className='card'>
                <h2 className='card-english'> {english}</h2>
                <p className='card-transcription'> {transcription}</p>
                <button className={"card-btn " + (this.state.pressed ? " pressed" : "")} onClick={this.handleChange}>{this.state.pressed ? <p>{russian}</p> : "Проверить"}</button>
            </div >
        );
    }
};
export default Card;
/*export default function Card(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <div className='card'>
            <h2 className='card-english'> sound</h2>
            <p className='card-transcription'> [saʊnd]</p>
            <button className={"card-btn " + (pressed ? " pressed" : "")} onClick={handleChange}>{pressed ? "звук" : "Проверить"}</button>
            <div>
                <a class="arrow prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="arrow next" onclick="plusSlides(1)">&#10095;</a>
            </div>
        </div >
    );
}*/