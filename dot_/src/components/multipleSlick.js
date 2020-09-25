import React, {Component} from "react";
import Slider from "react-slick";
import './multipleSlick.css';

export default class MultipleItems extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        };

        return (

            <div className="multipleItens">
                <Slider {...settings}>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                    <div className="multipleItens">
                        <img src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        <h3>LOREM IPSUM</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum laoreet tempor.
                            Morbi
                            consectetur at nisi eget gravida. Curabitur nibh tellus, fermentum rutrum vulputate id,
                            tristique in
                            ligula. </p>
                    </div>
                </Slider>
            </div>
        );
    }
}