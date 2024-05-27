// src/components/Carousel.js
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/Hithaldia.jpg";
import image2 from "../assets/Hithaldiacampus.jpg";
import image3 from "../assets/hit3.jpeg";


const PhotoCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className="h-96"> {/* Tailwind class to set height */}
        <img src={image1} alt="Campus 1" className="w-full h-full object-cover rounded-md" /> {/* Tailwind classes for consistent sizing */}
      </div>
      <div className="h-96">
        <img src={image2} alt="Campus 2" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="h-96">
        <img src={image3} alt="Campus 3" className="w-full h-full object-cover rounded-md" />
      </div>
    </Carousel>
  );
};

export default PhotoCarousel;
