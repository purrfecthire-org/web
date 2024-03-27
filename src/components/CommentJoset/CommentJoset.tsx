import React from "react";
import Image from "next/image";

export default function CommentJoset() {
  return (
    <section className="m-0 lg:py-10">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="poppins max-w-xl text-indigo-950 font-extrabold text-center lg:text-left mb-6">
            Why work at Purrfect <span className="whitespace-nowrap">Hire?</span>
          </h1>
          <p className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            "As a member of the founding team of Purrfect Hire, my
            enthusiasm stems from contributing to the development of a
            multicultural team, where each day presents opportunities
            for personal growth and learning. The stimulating
            environment not only attracts a diverse array of
            individuals but also nurtures my dynamic
            and curious nature." <br />
            <small className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md" > -Jose B. Gómez, Product Manager.</small>

          </p>

        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="ml-auto flex justify-center lg:justify-end">
            <Image
              className="w-[100%] h-auto rounded-xl"
              src="/people.png"
              width={800}
              height={8}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
