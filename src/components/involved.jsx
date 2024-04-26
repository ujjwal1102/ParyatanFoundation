const GetInvolved = () => {
  return (
    <>
      <section id="get-involved" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 ">Get Involved</h2>
          <p>
            Join us in our mission to create a better future for vulnerable
            communities. There are various ways you can get involved:
          </p>
          <ul className="list-unstyled">
            <li>
              <i className="fa-solid fa-handshake-angle pe-3"></i>Volunteer
            </li>
            <li>
              <i className="fa-solid fa-circle-dollar-to-slot pe-3"></i>Donate
            </li>
            <li>
              <i className="fa-solid fa-bullhorn pe-3"></i>Spread Awareness
            </li>
          </ul>
        </div>
      </section>

      {/* Collaborate */}
      <section id="collaborate" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Collaborate</h2>
          <p>
            We believe in the power of collaboration. Partner with us to create
            a more inclusive and supportive society for all. Whether you
            represent a government agency, NGO, or community group, we welcome
            collaboration opportunities to amplify our impact.
          </p>
        </div>
      </section>
      {/* Contact Us */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row d-flex justify-content-center">
            <p className="text-center">
              <i className="fa-solid fa-envelope pe-3"></i> test@gmail.com
            </p>
            <p className="text-center">
              <i className="fa-solid fa-phone pe-3"></i>+ 91 9876 54321
            </p>
            <p className="text-center">
              Feel free to reach out to us for any inquiries or collaboration
              opportunities.
            </p>

            {/* <div className="col-6">
              <p className="text-center">
                <i className="fa-solid fa-envelope pe-3"></i> test@gmail.com
              </p>
              <p className="text-center">
                
                <i className="fa-solid fa-phone pe-3"></i>+ 91 9876 54321
              </p>

              
            </div>
            <div className="col-6">
              <p>
                
                Feel free to reach out to us for any inquiries or collaboration
                opportunities.
              </p>
            </div> */}
            {/* </div> */}
          </div>
          {/* Contact Form or Contact Information */}
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
