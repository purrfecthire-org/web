"use client";

import React from "react";
import Image from "next/image";
import { IMAGES_CARROUSEL } from "./Carrousel.config";
import Slider from "react-slick";

export default function Carrousel() {
  return (
    <div
      key={"carrusel"}
      className="padding-container max-container mb-2">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll divide-calc">
          {IMAGES_CARROUSEL.map((image, index) => (
            <div key={index} className="flex flex-col justify-center">
              <div className="w-[200px] m-2"></div>
              <div className="w-[150px] m-2 flex items-center justify-center">
                <Image
                  src={`/carrousel-img/${image}`}
                  width={150}
                  height={150}
                  alt={image}
                  priority={true}
                />
              </div>
              <div className="w-[200px] m-2"></div>
            </div>
          ))}

          {IMAGES_CARROUSEL.map((image, index) => (
            <div key={index + "duo"} className="flex flex-col justify-center">
              <div className="w-[200px] m-2"></div>
              <div className="w-[150px] m-2 flex items-center justify-center">
                <Image
                  src={`/carrousel-img/${image}`}
                  width={150}
                  height={150}
                  alt={image}
                  priority={true}
                />
              </div>
              <div className="w-[200px] m-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
