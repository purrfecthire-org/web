import React from "react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about-section" className="lg:py-5 m-0 pt-10">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="flex lg:justify-start justify-center">
            <Image
              className="w-[80%] h-auto rounded-xl"
              src="/aboutImage.jpg"
              width={800}
              height={8}
              alt=""
            />
          </div>
        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2 flex flex-col">
          <h1 className="poppins text-indigo-950 font-extrabold text-center lg:text-right  mb-6">
            About us
          </h1>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
          Our team comprises passionate and dedicated individuals committed to excellence in all endeavors. We deeply value the synergy between candidates and companies, fostering robust and successful teams. Our mission extends beyond delivering exceptional talent; we aim to provide our clients with an unparalleled hiring journey.
          </p>
        </div>
      </div>
    </section>
  );
}
