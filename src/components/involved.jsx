const GetInvolved = () => {
  return (
    <>
      <section id="get-involved" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Get Involved</h2>
          <p>
            Join us in our mission to create a better future for vulnerable
            communities. There are various ways you can get involved:
          </p>
          <ul>
            <li>Volunteer</li>
            <li>Donate</li>
            <li>Spread Awareness</li>
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
          <p>
            Feel free to reach out to us for any inquiries or collaboration
            opportunities.
          </p>
          {/* Contact Form or Contact Information */}
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
