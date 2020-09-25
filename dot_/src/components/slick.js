import React, {Component} from "react";
import Slider from "react-slick";
import './slick.css';
import './multipleSlick.css'
import MultipleItems from "./multipleSlick";
import scrollToComponent from 'react-scroll-to-component';
import "slick-carousel/slick/slick-theme.css";


export default class BothSliders extends Component {
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
                <div className="relative-div">
                    <div className="caption_title">
                        <h1>LOREM IPSUM</h1>
                        <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h2>
                    </div>
                    <div className="caption_svg" onClick={() => scrollToComponent(this.box1,
                        {offset: 0, align: 'top', duration: 500})} id="svg_arrow">
                        <svg version="1.1" id="Capa_1"
                             x="0px" y="0px" viewBox="0 0 512 512">
                            <g>
                                <g>
                                    <path className="arrow_path" d="M441.156,322.876l-48.666-47.386c-3.319-3.243-8.619-3.234-11.93,0.017l-81.894,80.299V8.533
                            c0-4.71-3.823-8.533-8.533-8.533h-68.267c-4.71,0-8.533,3.823-8.533,8.533v347.273l-81.894-80.299
                            c-3.311-3.243-8.602-3.251-11.921-0.017l-48.666,47.386c-1.655,1.604-2.586,3.806-2.586,6.11c0,2.304,0.939,4.506,2.586,6.11
                            l179.2,174.481c1.655,1.613,3.806,2.423,5.948,2.423c2.15,0,4.292-0.811,5.956-2.423l179.2-174.481
                            c1.647-1.604,2.577-3.806,2.577-6.11C443.733,326.682,442.803,324.48,441.156,322.876z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="singleItem">
                        <img src={require('../imgs/forest_2400.jpg')} alt="forest"/>
                    </div>
                    <div className="singleItem">
                        <img src={require('../imgs/forest_2400.jpg')} alt="forest"/>
                    </div>
                    <div className="singleItem">
                        <img src={require('../imgs/forest_2400.jpg')} alt="forest"/>
                    </div>
                </Slider>
                <section className="goToBox1" ref={(section) => {
                    this.box1 = section;
                }}>
                    <div className="box1">
                        <div id="multipleItens">
                            <MultipleItems/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}