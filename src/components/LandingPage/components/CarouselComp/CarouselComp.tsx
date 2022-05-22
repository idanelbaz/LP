import React from 'react';
import Carousel from 'react-multi-carousel';
import SliderImg1 from "../../../../style/images/homepageSlider/image1.jpg";
import SliderImg2 from "../../../../style/images/homepageSlider/image2.jpg";
import SliderImg3 from "../../../../style/images/homepageSlider/image3.jpg";
import SliderImg4 from "../../../../style/images/homepageSlider/image4.png";
import SliderImg5 from "../../../../style/images/homepageSlider/image5.jpg";
import SliderImg6 from "../../../../style/images/homepageSlider/image6.png";
import SliderImg7 from "../../../../style/images/homepageSlider/image7.jpg";
import 'react-multi-carousel/lib/styles.css';
import "./CarouselComp.scss";

const images = [
    {
        url: SliderImg1,
        title: "Capture live events with your family"
    },
    {
        url: SliderImg2,
        title: "Make the biggest gift you can give"
    },
    {
        url: SliderImg3,
        title: "Endless time for generations"
    },
    {
        url: SliderImg4,
        title: "Make a voice memory capture for you or others"
    },
    {
        url: SliderImg5,
        title: "Save your memory in a volt"
    },
    {
        url: SliderImg6,
        title: "Create life time events"
    },
    {
        url: SliderImg7,
        title: "Every moment is worth saving"
    }
];


const CarouselComp: React.FC = (): JSX.Element => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    };


    return (
        <div className='carousel-container'>
            <Carousel
                partialVisbile
                itemClass="image-item"
                responsive={responsive}
                infinite
                autoPlay
                arrows={false}
            >
                {images.map(item => {
                    return (
                        <div className='carousel-item' key={item.url}>
                            <span className='title'>{item.title}</span>
                            <img
                                alt=''
                                className='img'
                                src={item.url}
                            />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default CarouselComp