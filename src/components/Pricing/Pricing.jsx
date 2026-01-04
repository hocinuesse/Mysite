import React from "react";
import "./Pricing.css";
import { pricing } from "../../data";

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Pricing Plans</h2>
        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card ${
                plan.recommended ? "recommended" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Most Popular Badge */}
              {plan.recommended && <div className="badge">Most Popular</div>}
              <h3 className="plan-title">{plan.title}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href="mailto:hocinebouhalab@gmail.com"
                className={`btn ${
                  plan.recommended ? "btn-primary" : "btn-outline"
                }`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
