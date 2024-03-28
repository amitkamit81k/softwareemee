import React from "react";
import BannerImg from "../../assets/images/banner/banner-1.jpg";
import "./Home.scss";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <>
      <section className="hero_section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 mt-4 pt-3 mb-3 pb-3 md:pr-3 md:order-1 order-2">
              <img
                src={BannerImg}
                alt="banner"
                className="w-50 md:w-50 text-center rounded-image"
              />
            </div>
            <div className="w-full md:w-1/2 mx-auto md:mx-6 px-6 hero_text text-center md:order-2 order-1">
              <h1 className="text-white text-sm[18px]">Welcome To</h1>
              <h2 className="text-white">Parental Control Software</h2>
              <p className="text-white pt-2 pb-4 mb-6">
                Parental Control Software allows parents to monitor, manage, and
                restrict their children's online activities, ensuring safe and
                responsible internet usage.
              </p>
              <Link to="/contact" className="btn order_now m-4 p-5">
      Contact Us
    </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
