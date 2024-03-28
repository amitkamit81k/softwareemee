import React from "react";
import Layout from "../../components/Layout/layout";
// import Cards from "../../components/Layout/Card";
import "./Products.scss";

// Product Mock Data
const productData = [
  {
    image: new URL(
      "../../assets/images/products/feature-icon-hike.webp",
      import.meta.url
    ).href,
    title: "Hike",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-imo.webp",
      import.meta.url
    ).href,
    title: "IMO",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-gmail.webp",
      import.meta.url
    ).href,
    title: "Gmail",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-location.webp",
      import.meta.url
    ).href,
    title: "Google Maps",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-line.webp",
      import.meta.url
    ).href,
    title: "Line",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-outlook.webp",
      import.meta.url
    ).href,
    title: "Microsoft Outlook",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-skype.webp",
      import.meta.url
    ).href,
    title: "Skype",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-viber.webp",
      import.meta.url
    ).href,
    title: "Viber",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-tinder.webp",
      import.meta.url
    ).href,
    title: "Tinder",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-snapchat.webp",
      import.meta.url
    ).href,
    title: "Snapchat",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-whatsapp.webp",
      import.meta.url
    ).href,
    title: "Whatapps",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-contacts.webp",
      import.meta.url
    ).href,
    title: "Contacts",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-applications.webp",
      import.meta.url
    ).href,
    title: "Applications",
  },
  {
    image: new URL(
      "../../assets/images/products/botim.webp",
      import.meta.url
    ).href,
    title: "Botim",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-call-recordings.webp",
      import.meta.url
    ).href,
    title: "Call Recordings",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-photos.webp",
      import.meta.url
    ).href,
    title: "Photos",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-yahoo.webp",
      import.meta.url
    ).href,
    title: "Yahoo",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-device-change.webp",
      import.meta.url
    ).href,
    title: "Device Change",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-hangout.webp",
      import.meta.url
    ).href,
    title: "Hangouts",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-keylogger.webp",
      import.meta.url
    ).href,
    title: "Keylogger",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-fb.webp",
      import.meta.url
    ).href,
    title: "facebook",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-sms.webp",
      import.meta.url
    ).href,
    title: "Message",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-call-logs.webp",
      import.meta.url
    ).href,
    title: "call Logs",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-surrounding.webp",
      import.meta.url
    ).href,
    title: "Surrounding",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-interenet-history.webp",
      import.meta.url
    ).href,
    title: "Google Browser",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-kik.webp",
      import.meta.url
    ).href,
    title: "Kik",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-technical-support.webp",
      import.meta.url
    ).href,
    title: "Technical Support",
  },
  {
    image: new URL(
      "../../assets/images/products/feature-icon-chat-support.webp",
      import.meta.url
    ).href,
    title: "Chat Support",
  },
];
function Products() {
  return (
    <Layout>
      {/* Menu Parallax Section Start */}
      <section className="menu_wrapper py-16"></section>
      {/* Menu Parallax Section End */}

      {/* Product Section Start */}
      <section className="py-12 menu_card">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mt-4 pt-mb-6 lg:leading-7">OUR best parental contraol software for android</h3>
        <p className="text-lg text-gray-700 text-center mb-8 mx-auto max-w-2xl mt-3 pt-3">Discover the ultimate parental control solution for Android
                devices, ensuring comprehensive supervision and protection for
                your child's online activities with ease and efficiency.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productData.map((cardData) => (
            <div className="group">
              <div className="rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <img src={cardData.image} alt={cardData.title} className="w-20 h-20 mx-[20px] my-[20px] rounded-3xl"/>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{cardData.title}</h4>
                  <p className="text-gray-700">{cardData.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Product Section End */}
    </Layout>
  );
}

export default Products;
