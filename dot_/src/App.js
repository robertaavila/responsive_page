import React from 'react';
import './App.css';
import SimpleAccordion from "./components/accordion";
import Circle_image from "./components/circle_image";
import MyForm from "./components/form";
import './components/multipleSlick.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './responsive.css';
import BothSliders from "./components/slick";


function App() {
    return (
        <div className="App">
          <BothSliders/>
            <div className="box2">
                <Circle_image/>
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

    );
}

export default App;
