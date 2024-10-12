import React from 'react';



interface CarouselProps {
  item: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
}

const Carousel: React.FC<CarouselProps> = ({ item }) => {

  return (
    <div className="carousel-container">
        <div key={item.id} >
          <img src={item.url} alt="Cat" style={{ width: '100%', height: 'auto' }} />
        </div>
    </div>
  );
};

export default Carousel;
