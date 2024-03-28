import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from '/src/assets/images/notfound/notfound.png';

function NotFound() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto p-4">
          <div className="text-center">
            <img
              src={NotFoundImage}
              alt="notfound"
              className="mx-auto"
            />
          </div>
          <div className="text-center mt-6">
            <Link to="/">
              <button className="px-4 py-2 text-white bg-amber-500 rounded hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
