"use client";

import React from "react";

const OrganizationValues = () => {
  const values = [
    {
      name: "Collaboration",
      description: `We function as a results-oriented unit, prioritizing tangible outcomes and solutions over excuses. Communication must always remain clear, professional, and consistent to ensure the entire team stays aligned. Accountability is maintained through the timely completion of all monthly tasks and progress reports by every member. Continuous growth is essential, requiring mandatory attendance at all leadership and development training sessions. We believe that reliability and active participation are the keys to driving our collective mission forward.`,
      icon: (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="80" r="50" stroke="currentColor" strokeWidth="4" fill="none"/>
          <circle cx="60" cy="100" r="15" fill="currentColor"/>
          <circle cx="100" cy="100" r="15" fill="currentColor"/>
          <circle cx="140" cy="100" r="15" fill="currentColor"/>
          <path d="M 60 115 L 60 140 M 100 115 L 100 140 M 140 115 L 140 140" stroke="currentColor" strokeWidth="4"/>
          <path d="M 45 140 L 75 140 M 85 140 L 115 140 M 125 140 L 155 140" stroke="currentColor" strokeWidth="4"/>
        </svg>
      )
    },
    {
      name: "Integrity",
      description: `We operate with unwavering honesty and self-discipline, doing the right thing even when no one is watching. Leaders must embody the standards they set, ensuring they never teach what they do not practice themselves. Protecting the team's trust is paramount, meaning all internal discussions and strategies remain strictly confidential. Every member acts as a brand ambassador, representing the organization with excellence both online and offline. We acknowledge that our reputation is our currency, and we guard it by consistently aligning our actions with our values.`,
      icon: (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <path d="M 70 140 L 100 90 L 130 140 Z" stroke="currentColor" strokeWidth="4" fill="none"/>
          <circle cx="100" cy="80" r="20" fill="currentColor"/>
          <rect x="80" y="120" width="40" height="40" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      )
    },
    {
      name: "Respect",
      description: `We foster a safe and inclusive environment where toxicity, cliques, and discrimination have absolutely no place. Every team member is treated with dignity and valued equally, regardless of their age, experience level, or background. Professional dictates that we address each other with courtesy and keep personal conflicts out of our work. We actively support one another, recognizing that a unified team is stronger than any individual ego. All interactions should build the team up, ensuring a culture of psychological safety and mutual support.`,
      icon: (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <path d="M 80 120 L 80 100 L 100 80 L 120 100 L 120 120 L 100 140 Z" fill="currentColor"/>
          <path d="M 60 100 L 80 80 L 100 100 M 100 100 L 120 80 L 140 100" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Organisation Values
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The principles that guide everything we do
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-48 h-48 mx-auto bg-red-500 rounded-full flex items-center justify-center text-black p-8">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3
                  className="text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.name}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationValues;
