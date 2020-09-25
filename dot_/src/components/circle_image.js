import React from "react";
import './circle_image.css';

class Circle_image extends React.Component {
    render() {
        return   <div className="row">
            <div className="column_left">
                <div className="clip-border">
                    <div className="clip-circle">
                        <img className="img_left" src={require('../imgs/forest_square.png')} alt="forest"/>
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
        </div>;
    }
}

export default Circle_image;