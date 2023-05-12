import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange = (id, e) => {
        this.setState({ pressed: !this.state.pressed });
        this.setState({ id: id });
        this.props.addToCart();
    }

    render() {
        const { id, english, transcription, russian } = this.props;

        /*const btnRef = useRef();
        useEffect(() => {
            btnRef.current.focus();
        }, []);
        //ref={btnRef}
        */

        return (
            <div className='card'>
                <h2 className='card-english'> {english}</h2>
                <p className='card-transcription'> {transcription}</p>
                <button className={"card-btn " + (this.state.pressed ? " pressed" : "")} onClick={(e) => this.handleChange(id, e)} >{this.state.pressed ? <p>{russian}</p> : "Проверить"}</button>
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