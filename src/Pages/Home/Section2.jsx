import React from "react";
import { Link } from "react-router-dom";
import ParentTrack from '../../assets/images/features/parent.png';
import ChildSafety from '../../assets/images/features/child.png';
import FamilySafety from '../../assets/images/features/family.png';

// Mock Data Cards
const mockData = [
  {
    image: ParentTrack,
    title: "Parent Child Live Tracking",
    paragraph: `Parent Child Live Tracking enables real-time monitoring of a child's location by the parent.`,
  },
  {
    image: ChildSafety,
    title: "Child Saftey",
    paragraph: `Child safety is paramount, requiring vigilance, education, and secure environments both online and offline.`,
  },
  {
    image: FamilySafety,
    title: "Family Safety & Security",
    paragraph: `Ensuring peace of mind through proactive digital protection for loved ones.`,
  },
  // Add more mock data objects as needed
];
function Section2() {
  return (
    <>
      <section className="features_section">
        <div className="container mx-auto px-3">
          <div className="row">
            <div className="grid grids-cols-12" lg={{ span: 8, offset: 2 }}>
              <h2 className="justify-center text-center  px-10">
                Discover the best feautes of <br /> Parental control Software
              </h2>
              <p className="text-center">
                Discovering the best features of parental control software
                unveils a suite of tools designed to empower parents in
                safeguarding their children's online experiences. These software
                solutions often offer a range of functionalities such as website
                filtering, application blocking, and time management tools,
                allowing parents to customize and enforce internet usage rules
                tailored to their family's needs.
              </p>
              <div class="flex justify-center items-center">
                <Link to="/products" className="btn order_now btn_red">
                  Explore Full Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features wrapper section start */}
      <section className="features_wrapper py-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockData.map((cardData, index) => (
        <div className="w-full" key={index}>
          <div className="features_box text-center p-6 rounded-lg">
            <div className="features_icon">
              <img
                src={cardData.image}
                className="mx-auto mb-4"
                alt="icon"
              />
              <h4 className="text-xl font-bold text-white">{cardData.title}</h4>
              <p className="text-white text-md font-normal md:text-[18px]">{cardData.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features wrapper section End */}
    </>
  );
}

export default Section2;
