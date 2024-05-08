import React, { useEffect } from "react";
import aboutimg from "../assets/about.jpg";
import banner from "../assets/banner.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <section
        id="about"
        className="w-[75%] mx-auto md:py-20 py-10 flex md:flex-row flex-col justify-between items-start gap-20"
      >
        <div className="md:w-[50%] w-full flex flex-col justify-center items-start gap-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay=""
            className="text-red-600 md:text-7xl text-6xl font-semibold"
          >
            JOIN TODAY
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-lg text-slate-600 text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            excepturi cupiditate impedit nostrum magnam saepe?
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            className="px-8 py-4 bg-blue-900 hover:bg-red-500 text-white font-semibold"
          >
            BOOK NOW
          </button>
          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            id="list-infos"
            className="flex md:flex-row flex-col justify-center md:items-center items-start gap-6 md:pr-10"
          >
            <div>
              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>{" "}
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>{" "}
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col justify-center items-start gap-2">
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>{" "}
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>{" "}
                <li className="flex justify-center items-center gap-2">
                  <span>
                    <FaCheck />
                  </span>
                  <span className="text-slate-600">Access to locker rooms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;