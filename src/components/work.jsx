const Work = () => {
  return (
    <>
      <section id="facts" className="facts-area dark-bg">
        <div className="container">
          <div className="facts-wrapper">
            <div className="row">
              <div className="col-md-3 col-sm-6 ts-facts">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/fact1.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={1789}>
                      1789
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Total Projects</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/fact2.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={647}>
                      647
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Staff Members</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/fact3.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={4000}>
                      4000
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Hours of Work</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/fact4.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={44}>
                      44
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Countries Experience</h3>
                </div>
              </div>
              {/* Col end */}
            </div>{" "}
            {/* Facts end */}
          </div>
          {/*/ Content row end */}
        </div>
        {/*/ Container end */}
      </section>
    </>
  );
};

export default Work;
