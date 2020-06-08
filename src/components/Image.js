import image0 from '../assets/images/0.jpg';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import React from 'react';

const Image = ({ index }) => {
    let images = [image0, image1, image2, image3, image4, image5, image6];
    
    return (
        <img src={images[index]} alt='hangman' />
    )
}

export default Image;