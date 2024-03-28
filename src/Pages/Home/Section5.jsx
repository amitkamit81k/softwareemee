import React from 'react';
import { Link } from 'react-router-dom';

function Section5() {
  return (
    <>
      <section className="contact_section py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h4>We Guarantee</h4>
            <h2 className='item-center text-center'>Provide the best services</h2>
            <p className="text-center text-lg text-gray-700 mb-6  md:text-md[40px] px-[239px]">
            Parental control software offers invaluable services for families seeking to navigate the digital world safely. With features ranging from website filtering and app blocking to time management tools, these platforms empower parents to monitor and manage their children's online activities effectively.
            </p>
            <Link to="tel:9999994242" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Call: 9999994242</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section5;
