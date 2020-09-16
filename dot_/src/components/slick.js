import React, { Component } from "react";
import Slider from "react-slick";
import './slick.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            button: false,
        };
        return (
            <div className="singleItem">
                <Slider {...settings}>
                    <div className="singleItem">
                        <img src={require('../imgs/forest_2400.jpg')} />
                    </div>
                    <div className="singleItem">
                        <img src={require('../imgs/forest_2400.jpg')} />
                    </div>
                    <div className="singleItem">
                        <img src={require('../imgs/forest_2400.jpg')} />
                    </div>
                </Slider>
            </div>
        );
    }
}