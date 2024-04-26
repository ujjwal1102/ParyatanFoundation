import logo from "../assets/fwdprayatanfoundationlogo/LOGOPNG.png";
const AboutUs = () => {
  return (
    <>
      <section id="about" className="py-5 ">
        <div className="container ">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row ">
            <div className="col-12 mb-4 col-sm-12 col-lg-4 col-md-4">
              <div className="d-flex justify-content-center align-item-center">
              <img src={logo} alt="Logo"   height={"200px"}/></div>
            </div>
            <div className="col-12 col-8 col-sm-12 col-lg-8 col-md-8">
              <p>
                At Prayatan Foundation, we are dedicated to making a difference
                in the lives of vulnerable individuals and communities. Our
                mission is to empower communities and transform lives through
                various initiatives focusing on education, healthcare, child
                welfare, and elderly support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
