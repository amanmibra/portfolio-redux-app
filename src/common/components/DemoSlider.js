import React from 'react';
import { Carousel } from 'react-responsive-carousel';



export default class DemoSlider extends React.Component{
  render() {
        return (
            <Carousel
              showArrows={true}
            >
                <div>
                    <img src="https://imgur.com/iI3Ys1C.jpg" />
                </div>
                <div>
                    <img src="https://imgur.com/SzB2qg1.jpg" />
                </div>
            </Carousel>
        );
    }
}
