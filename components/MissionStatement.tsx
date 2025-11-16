"use client";

import React from "react";

const MissionStatement = () => {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h2
          className="text-center mb-8"
          style={{ fontFamily: "var(--font-heading)" }}>
          Mission Statement
        </h2>
        <p className="text-xl md:text-2xl text-center leading-relaxed mb-6">
          The Gen Z Network stands as an umbrella of young people with the
          beacon of positivity, cultivating a generation steeped in unwavering
          values, discipline, and resilience.
        </p>
        <p className="text-lg text-center text-gray-700 leading-relaxed">
          We are the successive generation of light, each individual
          proclaiming, "Because I exist," as we commit to illuminating paths of
          positivity and empowerment for ourselves and the world.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
