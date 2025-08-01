"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { jobPosition } from "./RolCards.config";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./RolCards.css";
import { redirect } from "../../utilities/utils";

export default function RolCards() {
  const settings: CarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="open-roles-section" className="m-0 lg:py-10">
      <div className="max-container padding-container">
        <h1 className="poppins py-8 text-indigo-950 font-extrabold text-center">
          Posiciones abiertas
        </h1>
        <Slider {...settings}>
          {jobPosition.map((rol, index) => (
            <RolCard key={index} rol={rol} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

const RolCard = ({ rol }: { rol: JobPosition }) => (
  <div className="my-12 px-2.5">
    <div className="flex justify-center rounded-2xl w-full h-[380px] shadow-lg relative">
      <div className="w-[100%] flex justify-between flex-col items-center gap-[10px] px-[10px]">
        <div className="w-full poppins flex flex-col  h-[50%] pt-[50px]">
          <h2 className="xs2:text-xl text-lg h-[60px] font-bold text-center">
            {rol.title}
          </h2>

          <div className="flex justify-center items-center w-full">
            <p className="text-center">
              {rol.country}-{rol.modality}
            </p>
          </div>

          <p className="text-center">{rol.salary}</p>
        </div>
        <SkillsList skills={rol.skills} />
        <a
          href="/"
          type="button"
          onClick={(event) => redirect(event, rol.link)}
          className="text-white bg-indigo-950 font-medium rounded-lg px-5 pb-[12px] pt-[11px] mb-[25px] text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">
          Aplicar
        </a>
      </div>
      <Image
        src={rol.image_url}
        width={75}
        height={75}
        alt="imagen"
        className="img-rol_card border-8 border-white rounded-full"
      />
    </div>
  </div>
);

const SkillsList = ({ skills }: { skills: string[] }) => (
  <div className="flex justify-center flex-col gap-[20px]">
    <div className="flex justify-around items-center w-full flex-wrap poppins gap-[10px]">
      {skills?.map((skill, index) => (
        <p
          key={index}
          className="px-[5px] py-1 text-gray-500 rounded-xl border-2 xs:text-normal text-sm">
          {skill}
        </p>
      ))}
    </div>
  </div>
);
