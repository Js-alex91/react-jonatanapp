import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.gif";
import image2 from '../assets/image2.gif'
import image3 from '../assets/image3.gif'

const cards = [
  {
    id: 1,
    title: "nuevo-portafolio",
    image: image1,
    url: "https://jonatan.ilustrarte.com.ar",
  },
  {
    id: 2,
    title: "github",
    image: image2,
    url: "https://github.com/Js-alex91",
  },
  {
    id: 3,
    title: "portafolio-viejo",
    image: image3,
    url: "https://js-alex91.github.io/JonatanSevero/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
