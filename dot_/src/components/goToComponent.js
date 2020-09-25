import React, {Component} from "react";
import Slider from "react-slick";
import './slick.css';
import './multipleSlick.css'
import MultipleItems from "./multipleSlick";
import SimpleSlider from "./slick";
import scrollToComponent from 'react-scroll-to-component';
import "slick-carousel/slick/slick-theme.css";


export default class GoToComponent extends Component {
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
            <div>
                <SimpleSlider></SimpleSlider>
                {/*<section className="goToBox1" ref={(section) => {*/}
                {/*    this.box1 = section;*/}
                {/*}}>*/}
                {/*    <div className="box1">*/}
                {/*        <div id="multipleItens">*/}
                {/*            <MultipleItems/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>
        );
    }
}