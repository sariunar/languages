import React from 'react';
import cardData from "../App/data.json";
import Card from '../Card/Card';
import Slider from 'react-slick';
import './Slider.css';
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInCart: 0
        }
    }
    addToCart = () => {
        this.setState({
            itemsInCart: this.state.itemsInCart + 1
            //при втором клике по кнопке, для скрытия перевода, происходит подсчет
        });
    }
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <React.Fragment>
            <div className='slider' >
            <p className='qwe'>Вы изучили {this.state.itemsInCart} слов(а)</p>
                <Slider {...settings}>
                    {
                        cardData.map((card, i) =>
                            <div className='sliderCard'>
                                < Card key={i} english={card.english} transcription={card.transcription} russian={card.russian} addToCart={this.addToCart} />
                            </div>
                        )
                    }
                </Slider>
            </div>
            </React.Fragment>
        )
    };
};