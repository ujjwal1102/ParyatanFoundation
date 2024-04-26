import bgimg from "../assets/images/farmvisit.jpg";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
const Carousel = () => {
  const h1Element = useRef(null);
  useEffect(() => {
    const typed = new Typed(h1Element.current, {
      strings: [
        "Welcome to Prayatan Foundation", // String 1
        "Empowering Communities,", // String 2 (with a comma)
        " Transforming Lives", // String 3
      ],
      typeSpeed: 30, // Adjust typing speed as desired
      backSpeed: 25, // Adjust backspace speed (if applicable)
      loop: true, // Set to true for continuous typing effect
      cursorChar: "|", // Optional: Display a blinking cursor
      contentType: "html", // Important for handling commas and spaces
    });

    return () => {
      // Cleanup function (optional, if needed)
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="">
        {/* <div className="row"> */}
        {/* <div className="col-6 col-lg-6 col-md-6 col-sm-12 p-0">
            <div className="h-100 d-flex  justify-content-center align-items-center text-center">
              <h1 ref={h1Element} className="my-4"></h1>
            </div>
          </div> */}

        <div className="card  border-0 rounded-0" style={{ zIndex: -1 }}>
          <img src={bgimg} className="card-img" alt="..." />
          <div className="card-img-overlay" style={{ top: "150px" }}>
            <div className="d-flex justify-content-center align-item-center ">
              <h1 ref={h1Element} className="card-title text-white "></h1>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Carousel;
