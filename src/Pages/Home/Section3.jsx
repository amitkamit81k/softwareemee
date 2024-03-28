import React from 'react';
import Card from '../../components/Layout/Card';
import './Home.scss';
const mockData = [
    {
      image: new URL('../../assets/images/products/feature-icon-call-logs.webp', import.meta.url).href,
      title: "Call Logs",
      paragraph: "Call logs provide a detailed record of incoming, outgoing, and missed calls, essential for tracking communication activities and maintaining contact history efficiently.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/products/feature-icon-call-recordings.webp', import.meta.url).href,
      title: "Call Recordings",
      paragraph: "Call recordings offer invaluable insights and documentation, enhancing communication transparency and enabling quality assurance in various industries, from customer service to legal proceedings.",
    },
    {
      image: new URL('../../assets/images/products/feature-icon-contacts.webp', import.meta.url).href,
      title: "Contacts",
      paragraph: "Contacts are the vital links connecting individuals, facilitating communication, collaboration, and the exchange of information. They serve as essential resources for networking.",
    },
    {
      image: new URL('../../assets/images/products/feature-icon-fb.webp', import.meta.url).href,
      title: "Facebook",
      paragraph: "Facebook, a pioneering social media platform, connects billions worldwide, facilitating communication, content sharing, and community-building on an unprecedented scale.",
    },
    {
      image: new URL('../../assets/images/products/feature-icon-gmail.webp', import.meta.url).href,
      title: "Gmail",
      paragraph: "Gmail, Google's email service, revolutionized digital communication with its intuitive interface, extensive features, and robust spam filtering, empowering users worldwide.",
    },
    {
      image: new URL('../../assets/images/products/feature-icon-instagram.webp', import.meta.url).href,
      title: "Instagram",
      paragraph: "Call recordings offer invaluable insights and documentation, enhancing communication transparency and enabling quality assurance in various industries, from customer service to legal proceedings.",
    },
    {
      image: new URL('../../assets/images/products/feature-icon-skype.webp', import.meta.url).href,
      title: "Skype",
      paragraph: "Skype, a leading communication platform, facilitates seamless video and voice calls, instant messaging, and file sharing, fostering global connections and collaboration with user-friendly.",
    },
    {
      image: new URL('../../assets/images/products/feature-icon-snapchat.webp', import.meta.url).href,
      title: "Snapchat",
      paragraph: "Snapchat's feature-icon represents its dynamic platform, known for its ephemeral messaging, innovative AR filters, and engaging multimedia content, fostering real-time connections and creativity.",
    },
    // Other menu items...
];
function Section3() {
  return (
    <section className="py-12 menu_section bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 lg:leading-7">OUR Top Parental Control Software</h2>
        <p className="text-lg text-gray-700 text-center mb-8 mx-auto max-w-2xl">Our top parental control software provides comprehensive digital supervision, empowering parents to safeguard their children online through customizable filters, monitoring tools, and intuitive interfaces.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockData.map((cardData) => (
            <div className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
              <img src={cardData.image} alt={cardData.title} className="w-20 h-20 mx-[20px] my-[20px] rounded-3xl"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cardData.title}</h3>
                  <p className="text-gray-700">{cardData.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;
