import React from 'react';
import Slider from "react-slick";


function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: 20 }}
      onClick={onClick}
    >
      <img style={{ marginTop: -30, marginLeft: 4 }} alt='prev' src='/images/arrow_right.svg' />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: 20 }}
      onClick={onClick}
    >
      <img style={{ marginTop: -30, marginLeft: -4 }} alt='prev' src='/images/arrow_left.svg' />
    </div>
  );
}

function Carousel() {
  const items = [...Array(6)].map(item => ({
    name: "Dress",
    price: "$800",
    image: "https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg"
  }))

  return (
    <div style={{ maxWidth: '90vw', margin: 'auto', marginTop: 20 }}>
      <Slider
        slidesToShow={4}
        slidesToScroll={1}
        arrows
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {
          items.map(item => (
            <div style={{ width: 200 }}>
              <div className='card'>
                <img alt={item.name} src={item.image} />
                <p className='product_name'>{item.name}</p>
                <p className='price'>{item.price}</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Carousel;