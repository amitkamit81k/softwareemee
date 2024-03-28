import React from "react";
import PromotionImage from "../../assets/images/promotions/promo.jpg";
function Section4() {
  return (
    <>
      <section className="promotion_section py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <img
                src={PromotionImage}
                className="mx-auto lg:ml-0 max-w-full"
                alt="Promotion Image"
              />
            </div>
            <div className="px-5">
              <h2>
              Discover the Best Parental Control Software for Your Family
              </h2>
              <p className="text-base lg:text-lg text-gray-700 mb-6">
              Discovering the best parental control software for your family is crucial in ensuring a safe and enriching online experience for your children. These software solutions offer a comprehensive range of features tailored to meet the diverse needs of modern families.
              </p>
              <ul className="list-disc">
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Restrict access to inappropriate websites and content categories.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Manage and limit access to specific applications and games.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Manage and limit access to specific applications and games.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Track online activity, including browsing history and app usage
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Monitor social media interactions and receive alerts for concerning content.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Track the location of children's devices and receive location alerts.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-base lg:text-lg">
                  Manage settings and restrictions remotely from a parent dashboard or mobile app.
                  </p>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Parallax Section Start */}
      <section className="bg_parallax_scroll"></section>
      {/* Parallax Section End */}
    </>
  );
}

export default Section4;
