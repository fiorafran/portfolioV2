import React from "react";
import Slider from "react-slick";
import styles from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import schema from "../../schema";
import Title from "../Title";

const Technologies = () => {
  const { techNames } = schema;
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <>
      <Title>Tecnologías</Title>
      <styles.Container>
        <Slider {...settings}>
          {techNames?.map((name) => (
            <div key={name}>
              <styles.Image src={`assets/tech/${name}.png`} />
            </div>
          ))}
        </Slider>
      </styles.Container>
    </>
  );
};

export default Technologies;
