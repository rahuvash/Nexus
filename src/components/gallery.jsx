import React from "react";
import Carousel from "better-react-carousel";

const imageArray = [
  {
    src: "https://picsum.photos/800/700?random=1",
  },
  {
    src: "https://picsum.photos/800/700?random=2",
  },
  {
    src: "https://picsum.photos/800/700?random=3",
  },
  {
    src: "https://picsum.photos/800/700?random=4",
  },
  {
    src: "https://picsum.photos/800/700?random=5",
  },
  {
    src: "https://picsum.photos/800/700?random=6",
  },
  {
    src: "https://picsum.photos/800/700?random=7",
  },
  {
    src: "https://picsum.photos/800/700?random=8",
  },
];

function Gallery() {
  return (
    <Carousel cols={4} rows={1} gap={10} loop>
      {imageArray.map((image, index) => (
        <Carousel.Item key={index}>
          <img width="70%" alt="LOADING..." src={image.src} />
          <p>&nbsp; Hello</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Gallery;
