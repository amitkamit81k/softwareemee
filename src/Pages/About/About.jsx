import React from "react";
import Layout from "../../components/Layout/layout";
import "./About.scss";
import AboutIntro from "../../assets/images/about/about-intro.jpg";
function About() {
  return (
    <>
      <Layout>
        <section className="about_wrapper">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-8/12 mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-800">
                  Welcome To Parental Control Software
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* About Parental Control Software Section Start */}
        {/* About Borcelle Catering */}
<section className="about_intro">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center md:justify-start">
        <img
          src={AboutIntro}
          className="max-w-full h-auto"
          alt="About Borcelle Catering"
        />
      </div>
      <div>
        <div className="py-5 my-5">
          <div className="max-w-lg mx-auto">
            <p className="text-gray-800 mb-3 pb-3">
            Welcome to Parental Control Software, your trusted partner in ensuring a safe and balanced digital experience for families worldwide. At Parental Control Software, we understand the challenges parents face in navigating the ever-changing landscape of digital technology. That's why we've made it our mission to provide cutting-edge parental control solutions that empower parents to protect and guide their children in the online world.
            </p>
            <p className="text-gray-800 mb-3 pb-3">
              Our mission at Parental Control Software is simple to empower parents with the tools and knowledge they need to foster healthy digital habits and protect their children from online risks. We believe that every child deserves a safe and nurturing online environment where they can learn, explore, and connect with confidence. By offering comprehensive parental control solutions, we aim to support families in navigating the digital landscape responsibly and harmoniously.
            </p>
            <p className="text-gray-800">
            Our parental control software offers a comprehensive suite of features designed to address a wide range of online risks, including inappropriate content, cyberbullying, and excessive screen time. From content filtering and app blocking to real-time monitoring and usage insights, we provide parents with the tools they need to safeguard their children's digital well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* About Parental Control Software Section End */}
      </Layout>
    </>
  );
}

export default About;
