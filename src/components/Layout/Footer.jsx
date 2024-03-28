import React, { useState, useEffect } from "react";
import { Footer } from "flowbite-react";
import { BsArrowUp, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Footer.scss';

function FooterComponent() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <Footer>
        <div className="w-full flex flex-col items-center text-center sm:flex sm:items-center sm:justify-between">
          <div className="grid px-6 py-8 md:grid-cols-4 sm:grid-cols-1">
            <div className="text-center">
              <Footer.Title
                title="About Us"
                className="text-black font-bold text-2xl"
              />
              <Footer.LinkGroup col>
                <p className="text-gray-500 text-base font-normal">
                  Discover comprehensive parental control solutions with our
                  intuitive software, empowering families to navigate the
                  digital landscape safely. Gain peace of mind and ensure a
                  secure online environment for your children with our trusted
                  platform.
                </p>
              </Footer.LinkGroup>
            </div>
            <div className="text-center">
              <Footer.Title
                title="Location"
                className="text-black font-bold text-2xl"
              />
              <Footer.LinkGroup col>
                <p className="text-gray-500 text-base font-normal">
                  162/29 Guru Arjun Nagar
                </p>
                <p className="text-gray-500 text-base font-normal">
                  Opp. Metro Piller Number 230, Main Patel Nagar Road
                </p>
                <p className="text-gray-500 text-base font-normal">
                  New Delhi-110008 Near Shadi Pur Metro Station.
                </p>
              </Footer.LinkGroup>
            </div>
            <div className="text-center">
              <Footer.Title
                title="Working Hours"
                className="text-black font-bold text-2xl"
              />
              <Footer.LinkGroup col>
                <p className="text-gray-500 text-base font-normal">
                  Mon-Fri: 10:00AM - 7:00PM{" "}
                </p>
                <p className="text-gray-500 text-base font-normal">
                  Saturday: 10:00AM - 8:30PM
                </p>
                <p className="text-gray-500 text-base font-normal">
                  Sunday: 12:00AM - 5:00PM
                </p>
              </Footer.LinkGroup>
            </div>
            <div className="text-center">
              <Footer.Title
                title="Legal"
                className="text-black font-bold text-2xl"
              />
              <Footer.LinkGroup col>
                <Link to="/" className="text-gray-500 text-base font-normal">
                  Privacy Policy
                </Link>
                <Link to="/" className="text-gray-500 text-base font-normal">
                  Terms & Conditions
                </Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </Footer>

      {/* Copyright Section Start */}
      <section>
        <div className="px-4 py-6 sm:flex sm:items-center sm:justify-between md:text-center">
          <Link to="/">
            <Footer.Copyright
              by=" Parental Control Software | All Right Reserved."
              year={2024}
              className="mx-5 text-center"
            />
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 pr-10">
            <Link to="/">
              <Footer.Icon icon={BsFacebook} />
            </Link>
            <Link to="/">
              <Footer.Icon icon={BsInstagram} />
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll To Top */}
      {isVisible && (
        <div
          className="scroll_top fixed bottom-4 right-4 text-white p-3 rounded-full cursor-pointer"
          onClick={scrollTop}
        >
          <BsArrowUp/>
        </div>
      )}
    </>
  );
}
export default FooterComponent;
