import React from "react";

// Define types for pricing plans
type PricingPlan = {
  title: string;
  price: string;
  frequency: string;
  quality: string;
  resolution: string;
  screens: string;
};

const pricingPlans: PricingPlan[] = [
  {
    title: "premium",
    price: "$7.99",
    frequency: "Monthly",
    quality: "Good",
    resolution: "480p",
    screens: "1",
  },
  {
    title: "standard",
    price: "$9.99",
    frequency: "Monthly",
    quality: "Better",
    resolution: "1080p",
    screens: "2",
  },
  {
    title: "premium",
    price: "$11.99",
    frequency: "Monthly",
    quality: "Best",
    resolution: "4K+HDR",
    screens: "4",
  },
];

const Price: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-area breadcrumb-bg"
        style={{ backgroundImage: `url('img/bg/breadcrumb_bg.jpg')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Our Plan</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Pricing
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Area */}
      <section
        className="pricing-area pricing-bg"
        style={{ backgroundImage: `url('img/bg/pricing_bg.jpg')` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title title-style-three text-center mb-70">
                <span className="sub-title">our pricing plans</span>
                <h2 className="title">Our Pricing Strategy</h2>
              </div>
            </div>
          </div>

          <div className="pricing-box-wrap">
            <div className="row justify-content-center">
              {pricingPlans.map((plan, index) => (
                <div className="col-lg-4 col-md-6 col-sm-8" key={index}>
                  <div
                    className={`pricing-box-item mb-30 ${
                      index === 1 ? "active" : ""
                    }`}
                  >
                    <div className="pricing-top">
                      <h6>{plan.title}</h6>
                      <div className="price">
                        <h3>{plan.price}</h3>
                        <span>{plan.frequency}</span>
                      </div>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li className="quality">
                          <i className="fas fa-check"></i> Video quality{" "}
                          <span>{plan.quality}</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Resolution{" "}
                          <span>{plan.resolution}</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Screens you can watch{" "}
                          <span>{plan.screens}</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Cancel anytime
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="#" className="btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;

