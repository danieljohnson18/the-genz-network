"use client";

import React from "react";

const FounderSection = () => {
  return (
    <section className="section section-gray">
      <div className="container">
        {/* 50/50 Split Layout */}
        <div className="split-layout gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] bg-gray-300 overflow-hidden">
              <img
                src="https://genzphere.netlify.app/images/founder1.png"
                alt="Gift Chinonso Agodi, Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <div className="text-sm uppercase tracking-wide mb-4 text-gray-600">
              Founder & President
            </div>
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gift Chinonso Agodi
            </h2>
            <div className="text-sm text-gray-600 mb-6">@genzpresident</div>

            <blockquote className="border-l-4 border-black pl-6 mb-8">
              <p className="text-lg md:text-xl leading-relaxed mb-4">
                "It is necessary to be the light. We must ensure our existence matters
                through collective action."
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Together, we are building a movement that transcends borders and unites
                a generation committed to positive change. Our mission is clear: to cultivate
                a successive generation of light, where every young person recognizes their
                power to make a difference.
              </p>
            </blockquote>

            <div className="space-y-4">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Vision
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                The Gen Z Network was founded on the belief that this generation has the
                potential to reshape our world through values, discipline, and resilience.
                We're not just building an organization—we're nurturing a global movement
                of empowered young leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
