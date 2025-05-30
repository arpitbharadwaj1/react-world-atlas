import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <div className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="her-content">
            <h1 className="heading-xl">
              Explore the world, One country at a time
            </h1>
            <p className="paragraph">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
              Whether you're planning a trip, studying geography, or just
              curious about the world, our platform has you covered.
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div className="hero-image"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
