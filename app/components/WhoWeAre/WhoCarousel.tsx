"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageI } from "@/app/types/features";

const WhoCarousel = ({ images }: { images: ImageI[] }) => {
  const [currentIndex] = useState(0);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              data-bs-interval="5000"
              className={`carousel-item  ${
                currentIndex === index ? "active" : ""
              }`}
            >
              <Image
                className="d-block w-100"
                src={item.img}
                alt={item.alt}
                width={500}
                height={400}
                priority={false}
                quality={50}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default WhoCarousel;
