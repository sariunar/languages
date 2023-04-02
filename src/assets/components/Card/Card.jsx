import React from 'react';
import './Card.css';

class Card extends React.Component {
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

export default Card;