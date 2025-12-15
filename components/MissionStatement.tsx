"use client";

import React from "react";

const MissionStatement = () => {
  return (
    <section className="section">
      <div className="container max-w-5xl">
        {/* Mission Statement */}
        <div className="mb-20">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}>
            Mission Statement
          </h2>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-center leading-relaxed font-medium text-gray-900">
              The GenZ Network is a youth empowerment and development organization focused on raising a
              value-driven generation that prioritizes discipline, purpose, accountability, emotional intelligence, and
              creativity.
            </p>

            <div className="bg-gray-50 p-8 md:p-12 max-w-3xl mx-auto">
              <p className="text-lg text-center text-gray-700 leading-relaxed mb-6">
                Through mentorship, community building, digital learning, and leadership training, we help
                young people:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-6">
                  <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                    Discover themselves
                  </p>
                </div>
                <div className="bg-white p-6">
                  <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                    Develop relevant skills
                  </p>
                </div>
                <div className="bg-white p-6">
                  <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                    Build self-confidence
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <p className="text-lg text-center text-gray-700 leading-relaxed">
                The Gen Z Network stands as an umbrella of young people with the beacon of positivity,
                cultivating a generation steeped in unwavering values, discipline, and resilience.
              </p>
              <p className="text-lg text-center text-gray-700 leading-relaxed mt-4">
                We are the successive generation of light, each individual proclaiming, <strong>"Because I exist,"</strong> as we
                commit to illuminating paths of positivity and empowerment for ourselves and the
                world.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-black text-white p-12 md:p-16 -mx-4 md:mx-0">
          <h2
            className="text-center mb-8 text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
            Vision Statement
          </h2>
          <p className="text-xl md:text-2xl text-center leading-relaxed max-w-4xl mx-auto">
            To empower young people with the mindset, skills, identity, and character needed to rise
            above limitations, build purposeful lives, and become a generation of light that transforms
            communities through innovation, discipline, and intentional action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
