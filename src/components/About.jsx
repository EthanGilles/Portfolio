import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";

import hiking from "../assets/about/hikin.jpg";
import ladybug from "../assets/about/ladybug.jpg";
import ski from "../assets/about/ski.jpg";
import sitting from "../assets/about/sitting.jpg";
import goat from "../assets/about/goat.jpeg";
import cat from "../assets/about/catyawn.jpeg";


const About = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    waitForAnimate: false,
  };

  const images = [hiking, ladybug, ski, sitting, goat, cat]; // Replace with your image paths

  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-20 text-center text-4xl">
        About 
        <span className="text-neutral-400"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Slider {...settings} className="w-full">
              {images.map((img, index) => (
                <div key={index}>
                  <img className="rounded-2xl" src={img} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
