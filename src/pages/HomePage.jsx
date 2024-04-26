import React from "react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
// import Work from "../components/work";
import Footer from "../components/footer";
import AboutUs from "../components/aboutus";
import Programs from "../components/programs";
import GetInvolved from "../components/involved";

const HomePage = () => {
  return (
    <>
      <NavBar />
      {/* <section> */}
        <Carousel />
      {/* </section> */}
      {/* <Work/> */}
      <AboutUs />
      <Programs/>
      <GetInvolved/>
      <Footer />
    </>
  );
};
export default HomePage;
