import React from 'react';
import './App.css';
import SimpleAccordion from "./components/accordion";
import SimpleSlider from "./components/slick";
import MultipleItems from "./components/multipleSlick";
import "slick-carousel/slick/slick.css";
import MyForm from "./components/form";
import './components/multipleSlick.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from 'react-router';

function App() {
    return (
        <div className="App">
            <div className="relative-div">
                <div className="caption_title">
                    <h1>LOREM IPSUM</h1>
                    <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h2>
                </div>
                <div className="caption_svg">
                    {/*<Link to="/section1">*/}
                    <a href="section1" id="svg_arrow">
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
                    </a>
                    {/*</Link>*/}
                </div>
            </div>
            <div id="section1" >
                <SimpleSlider/>
            </div>
            <div className="box1">
                <MultipleItems/>
            </div>
            <div className="box2">
                <div className="row">
                    <div className="column_left">
                        <div className="clip-border">
                            <div className="clip-circle">
                                <img className="img_left" src={require('./imgs/forest_square.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column_right">
                        <h3>LOREM IPSUM</h3>
                        <p>Pellentesque sit amet libero nulla. Proin pellentesque leo sed ante efficitur efficitur.
                            Curabitur vel
                            semper purus, et ullamcorper tellus. Vivamus egestas, nibh vel elementum vehicula, risus
                            lorem tempus
                            nunc. Duis imperdiet viverra iaculis.</p>
                        <p className="font_strong"> Duis imperdiet viverra iaculis. Nam eu aliquet ante, ut laoreet
                            nisl. Donec non
                            iaculis sem, nec posuere
                            erat. Proin sapien lectus, maximus nec molestie in, hendrerit eget nunc. Integer mattis
                            non purus quis
                            cursus. Duis imperdiet viverra iaculis.</p>
                        <p>Pellentesque sit amet libero nulla. Proin pellentesque leo sed ante efficitur efficitur.
                            Curabitur vel
                            semper purus, et ullamcorper tellus. Vivamus egestas, nibh vel elementum vehicula, risus
                            lorem tempus
                            nunc. Duis imperdiet viverra iaculis.</p>
                        <p>Ut accumsan venenatis neque, non maximus augue pharetra at. Etiam mollis tellus eget
                            metus imperdiet
                            fermentum. Integer id est quam. Sed vulputate leo est. Sed sed velit eros. Sed vel dolor
                            condimentum,
                            vestibulum nulla a, elementum odio. Curabitur id congue erat, in hendrerit ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="accordion_background">
                <div className="accordion_margin">
                    <SimpleAccordion/>
                </div>
            </div>
            <div className="triangle">
                <MyForm/>
            </div>
            <div className="footer">
                <h3 className="font_footer">
                    LOREM IPSUM
                </h3>
            </div>
        </div>

    )
        ;
}

export default App;
