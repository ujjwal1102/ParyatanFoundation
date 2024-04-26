import housesvg from "../assets/images/housesvgrepo.svg";
import nutrition from "../assets/images/nutrition.png";
import elderlysupport from "../assets/images/elderlysupport.png";

const Programs = () => {
  return (
    <>
      <section id="programs" className=" py-5">
        <div className="container">
          <h2 className="text-center mb-4">Programs</h2>
          <div className="row text-center">
            <div className="col-md-4 ">
              <h3 className="align-middle py-4">Child Welfare and Education</h3>
              <div className="d-flex justify-content-center my-4">
                <img
                  src={housesvg}
                  alt="Child Welfare"
                  className="img-thumbnail rounded w-50 bg-transparent border-0"
                />
              </div>
              <ul className="list-unstyled">
                <li>Access to Quality Education</li>
                <li>Child Rights Advocacy</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="align-middle py-4">Health and Nutrition</h3>
              <div className="d-flex justify-content-center my-4">
                <img
                  src={nutrition}
                  className="img-thumbnail rounded w-50 bg-transparent"
                  alt="Child Welfare"
                />
              </div>
              <ul className="list-unstyled">
                <li>Holistic Well-being</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="align-middle py-4">Elderly Support</h3>
              <div className="d-flex justify-content-center my-4">
                <img
                  src={elderlysupport}
                  className="img-thumbnail rounded w-50 bg-transparent"
                  alt="Child Welfare"
                />
              </div>
              <ul className="list-unstyled">
                <li>Collaboration and Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
