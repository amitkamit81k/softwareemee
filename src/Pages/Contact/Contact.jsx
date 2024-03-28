import React from "react";
import Layout from "../../components/Layout/layout";
import "./Contact.scss";
import {Link} from 'react-router-dom';
function Contact() {

  return (
    <>
      <Layout>
        {/* Contact Banner Section Start */}
        <div className="contact_wrapper"></div>
        {/* Contact Banner Section End */}

        {/* Contact Form Section Start */}
        <section className="contactform_wrapper py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-8 md:mb-0">
                <form action="https://getform.io/f/lajkjwrb"  method="POST" className="text-start" enctype="multipart/form-data">
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                        name="fullName" autoComplete="off"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                        name="email" autoComplete="off"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <input
                        type="tel"
                        id="contact"
                        placeholder="Contact"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                        name="contact" autoComplete="off"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                        name="subject" autoComplete="off"
                      />
                    </div>
                    <div className="w-full px-2 mb-4">
                      <textarea
                        id="message"
                        placeholder="Type your message in here..."
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 resize-none"
                        name="message" autoComplete="off"
                      ></textarea>
                    </div>
                    <div className="px-2">
                      <button
                        type="submit"
                        className="block py-3 px-4 contact_button rounded transition duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-1/3 address_details">
                <div className="mb-4">
                  <div className="bg-white rounded-lg shadow-md p-4 company_phone">
                    <h4 className="text-xl font-bold mb-3">
                      Company Email/Phone
                    </h4>
                    <p className="mb-2">
                      <Link to="mailto:actionindiadelhi@gmail.com">actionindiadelhi@gmail.com</Link>
                    </p>
                    <p>
                      <a href="tel:+1234567890" className="text-blue-500">
                        9999994242
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-lg shadow-md p-4 address_details company_address">
                    <h4 className="text-xl font-bold mb-3">Company Address</h4>
                    <p>
                      H.O. - 2162/29 Guru Arjun Nagar Opp. Metro Piller Number 230, Main Patel Nagar Road New Delhi-110008 Near Shadi Pur Metro Station.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form Section End */}

        <section className="map-responsive">
          <div className="h-screen">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.297782577322!2d77.15451878685226!3d28.650801120492396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02e55d657ff5%3A0xa8f8d81f0850182c!2sAction%20India%20Home%20Products!5e0!3m2!1sen!2sin!4v1711191149915!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Responsive Google Map"
            ></iframe>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
