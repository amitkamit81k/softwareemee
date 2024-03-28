import React from "react";
import AppInstall from "../../assets/images/install/appinstall.gif";
function Section6() {
  return (
    <>
   <div className="container mx-auto px-4 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="sm:mt-20 p-4 order-first sm:order-first">
      <img src={AppInstall} alt="App Image" className="object-cover" />
    </div>
    <div className="sm:mt-20 p-4 order-last sm:order-last">
      <h3 className="text-5xl leading-[1.3]">
        Simple Ways to Track your Children Activities
      </h3>
      <ul className="mt-6 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <li className="bg-gray-100 rounded-lg p-4 sm:p-6">
          <h5 className="text-lg md:text-sm font-bold mb-2">Buy Now</h5>
          <p className="text-gray-500 md:text-base text-[16px] mt-3 mb-3 pt-3 pb-3">
            Make a purchase, we are offering a huge discount for limited time!
          </p>
        </li>
        <li className="bg-gray-100 rounded-lg p-4 sm:p-6">
          <h5 className="text-lg md:text-sm font-bold mb-2">Install Our Application</h5>
          <p className="text-gray-500 md:text-base text-[16px] mt-3 mb-3 pt-3 pb-3">
            Choose Add Device on the dashboard. Follow install prompts. That's it.
          </p>
        </li>
        <li className="bg-gray-100 rounded-lg p-4 sm:p-6">
          <h5 className="text-lg md:text-sm font-bold mb-2">Start Monitoring your Child Activity</h5>
          <p className="text-gray-500 md:text-base text-[16px] mt-3 mb-3 pt-3 pb-3">
            Log in to our dashboard to start monitoring your children activities remotely.
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  );
}

export default Section6;
