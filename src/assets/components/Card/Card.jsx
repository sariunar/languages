import React, { useState } from 'react';
import './Card.css';

/*class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <h2 className='card-english'> sound</h2>
                <p className='card-transcription'> [saʊnd]</p>
                <button className="card-btn">Проверить</button>
            </div >
        );
    }
};
export default Card;*/
export default function Card(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <div className='card'>
            <h2 className='card-english'> sound</h2>
            <p className='card-transcription'> [saʊnd]</p>
            <button className={"card-btn " + (pressed ? " pressed" : "")} onClick={handleChange}>{pressed ? "звук" : "Проверить"}</button>

        </div >
    );
}