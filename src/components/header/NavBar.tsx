"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";



export default function NavBar() {
  const [isClick, setisClick] = React.useState(false);
  

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };


  

  return (
    <>
      <nav className="bg-white fixed w-full z-50 shadow-[0px_0px_8px_#ccc]">
        <div className="padding-container max-container">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shirink">
                <Link href="/#main-content">
                  <Image
                    src="/logo-desktop.png"
                    width={170}
                    height={45}
                    alt="Picture of the author"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="poppins ml-4 flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/company/purrfect-hire/mycompany/"
                  target="_blank"
                  className="text-indigo-800 font-medium text-lg hover:bg-white rounded-lg p-2">
                  Follow Us
                </a>

                <a
                  href="#about-section"
                  className="text-indigo-800 font-medium text-lg hover:bg-white rounded-lg p-2">
                  About
                </a>

                <a
                  href="https://forms.gle/tZ1mtHys6kLoYQZc8"
                  target="_blank"
                  className="text-indigo-800 font-medium text-lg hover:bg-white rounded-lg p-2">
                  Careers
                </a>
                <a
  href="https://latam.purrfecthire.com/"
  target="_self"
  className="text-indigo-800 font-medium text-lg hover:bg-white rounded-lg p-2 flex items-center"
>
  <img
    src="https://cdn.weglot.com/flags/square/es.svg"
    width="20"
    height="20"
    alt="Spain flag"
    className="wg-flag mr-2"
  />
  <span>ES</span>
</a>


                
                
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}>
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isClick && (
          <div className="md:hidden absolute bg-white z-10 w-[100%]">
            <div className=" poppins px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="https://www.linkedin.com/company/purrfect-hire/mycompany/"
                target="_blank"
                className="text-indigo-800 font-medium text-lg block hover:bg-white rounded-lg p-2">
                Follow Us
              </a>

              <a
                href="#about-section"
                className="text-indigo-800 font-medium text-lg block hover:bg-white rounded-lg p-2">
                About
              </a>
              <a
                href="https://forms.gle/tZ1mtHys6kLoYQZc8"
                className="text-indigo-800 font-medium text-lg block hover:bg-white rounded-lg p-2">
                Careers
              </a>

<a
  href="https://latam.purrfecthire.com/"
  target="_self"
  className="text-indigo-800 font-medium text-lg hover:bg-white rounded-lg p-2 flex items-center"
>
  <img
    src="https://cdn.weglot.com/flags/square/es.svg"
    width="20"
    height="20"
    alt="English flag"
    className="wg-flag mr-2"
  />
  <span>ES</span>
</a>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}
