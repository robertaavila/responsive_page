import React, { Component } from "react";
import Slider from "react-slick";
import './multipleSlick.css';

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className="multipleItens">
                <Slider {...settings}>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor. Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id, tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor. Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id, tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor. Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id, tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                    </div>
                    <div className="multipleItens">
                        <img src={require('./forest_640.jpg')} />
                    </div>
                </Slider>
            </div>
        );
    }
}