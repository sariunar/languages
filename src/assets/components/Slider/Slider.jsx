import React from 'react';
import cardData from "../App/data.json";
import Card from '../Card/Card';
import Slider from 'react-slick';
import './Slider.css';

export default function Carousel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                {
                    cardData.map((card, i) =>
                        <div className='sliderCard'>
                            < Card key={i} english={card.english} transcription={card.transcription} russian={card.russian} />
                        </div>
                    )
                }
            </Slider>
        </div>
    );
};