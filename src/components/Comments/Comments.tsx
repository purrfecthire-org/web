"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./Comments.css";

export default function Comments({ title, comments }: Coments) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="m-0 lg:py-10">
      <div className="max-container my-10 h-auto padding-container">
        <h1 className="poppins py-8 text-indigo-950 font-extrabold text-center">
          {title}
        </h1>
        <Slider {...settings}>
          {comments.map((card, index) => (
            <CardComment {...card} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

const CardComment = ({
  comment,
  name,
  img,
  role,
  company,
  country,
  time,
}: CardComment) => {
  return (
    <div className="my-12 px-2.5 relative">
      <div className="w-full xs:h-[460px] h-[500px] shadow-xl comments flex flex-col items-center justify-between rounded-2xl">
        <div className="pt-8 px-4 flex flex-col gap-[10px]">
          <h2 className="xs2:text-xl text-lg font-bold text-center">
            {role} - {company}
          </h2>
          <p className="text-gray-500 text-center roboto">
            {comment}
          </p>
        </div>

        <div className="pb-6 flex flex-col items-center">
          <div className="flex bg-white rounded-full justify-center items-center flex-wrap w-[5rem] h-[5rem]">
            <Image
              className="rounded-full w-[5rem] h-[5rem] bg-cover"
              src={img}
              width={808}
              height={88}
              alt="imagen"
            />
          </div>

          <p className="roboto text-center font-bold text-white pt-[5px]">
            {name} - {country}
          </p>
          <p className="roboto text-center font-bold text-gray-300 pt-[5px]">
            {time && `${time}`}
          </p>
        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-md">
          <path
            d="M7.5 13.25C7.98703 13.25 8.45082 13.1505 8.87217 12.9708C8.46129 14.0478 7.62459 15.5792 6.35846 15.76C5.81173 15.8382 5.43183 16.3447 5.50993 16.8914C5.58804 17.4382 6.09457 17.8181 6.6413 17.7399C9.19413 17.3753 10.7256 14.4711 11.169 12.1909C11.4118 10.942 11.3856 9.58095 10.8491 8.44726C10.2424 7.16517 8.92256 6.24402 7.48508 6.25001C5.55895 6.25805 4 7.82196 4 9.74998C4 11.683 5.567 13.25 7.5 13.25Z"
            fill="currentColor"></path>
          <path
            d="M16.1799 13.25C16.667 13.25 17.1307 13.1505 17.5521 12.9708C17.1412 14.0478 16.3045 15.5792 15.0384 15.76C14.4917 15.8382 14.1118 16.3447 14.1899 16.8914C14.268 17.4382 14.7745 17.8181 15.3212 17.7399C17.8741 17.3753 19.4056 14.4711 19.8489 12.1909C20.0918 10.942 20.0655 9.58095 19.529 8.44726C18.9223 7.16517 17.6025 6.24402 16.165 6.25001C14.2389 6.25805 12.6799 7.82196 12.6799 9.74998C12.6799 11.683 14.2469 13.25 16.1799 13.25Z"
            fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};
