"use client";

import React from "react";

const PriorityAreas = () => {
  const challenges = [
    "Digital overwhelm",
    "Identity confusion",
    "Poor mentorship",
    "Mental health struggles",
    "Pressure to succeed early",
    "Misinformation and comparison culture",
    "Lack of community",
    "Weak value systems",
    "Low self-esteem masked by confidence",
    "Global instability and unemployment"
  ];

  const goals = [
    "Raise a generation grounded in discipline and strong values",
    "Build youth confidence, identity, and purpose",
    "Provide mentorship and guidance across major life pillars",
    "Empower youths with digital, creative, and leadership skills",
    "Build regional chapters globally",
    "Create opportunities for GenZ to collaborate and grow",
    "Establish a strong alumni ecosystem of future leaders",
    "Advocate for issues affecting young people",
    "Strengthen mental health awareness"
  ];

  return (
    <section className="section section-gray">
      <div className="container">
        {/* Background & Why We Exist */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why The GenZ Network Exists
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We recognize the unique challenges facing our generation and are committed to addressing them head-on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 hover:border-black transition-all"
              >
                <p
                  className="text-sm md:text-base leading-tight"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Goals
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              What we're working towards as a community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex items-start p-8 bg-white hover:shadow-xl transition-all group"
              >
                <div className="mr-4 mt-1.5 flex-shrink-0">
                  <div className="w-3 h-3 bg-black group-hover:scale-125 transition-transform"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriorityAreas;
