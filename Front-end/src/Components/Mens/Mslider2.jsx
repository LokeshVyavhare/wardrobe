import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mmkdata} from '../Womens/data';
import { Heading } from '@chakra-ui/react';


function Msliderr2() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (kdata) => {
    setDefaultImage((prev) => ({
      ...prev,
      [kdata.target.alt]: kdata.target.alt,
      
    }));
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {mmkdata.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.link
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <Heading size="sm">{item.title}</Heading>
            </div>
            <div className="card-bottom">
            <span className="category">{item.category}</span>
            <h3>{item.offer}</h3>
              <Heading size="sm">{item.price}</Heading>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Msliderr2;



