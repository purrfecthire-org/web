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
            About Purrfect Hire
          </h1>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
            We&apos;re a boutique hiring firm built specifically for founders at YC, a16z, and Sequoia portfolio companies. We work the senior hires that decide whether a company scales or stalls. Before opening pipeline, we spend time calibrating against the founder&apos;s real culture, not the JD. Then we train the talent we place against that exact signal.
          </p>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
            The result: 160+ placements, 80% retention at 24 months, and a closed-loop system where what we learn from founders sharpens how we train talent, and what we learn from talent sharpens who we place.
          </p>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
            In a market scaling volume without calibration, we operate the opposite way: source less, calibrate more, consult as peers.
          </p>
        </div>
      </div>
    </section>
  );
}
