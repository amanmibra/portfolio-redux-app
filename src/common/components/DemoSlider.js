import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default class DemoSlider extends React.Component{
  render() {
        return (
            <Carousel
              showArrows={true}
            >
                <div>
                    <img src="https://imgur.com/SzB2qg1.jpg" />
                </div>
                <div>
                    <img src="https://imgur.com/iI3Ys1C.jpg" />
                </div>
            </Carousel>
        );
    }
}
