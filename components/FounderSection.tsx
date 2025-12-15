"use client";

import React from "react";

const FounderSection = () => {
  return (
    <section className="section section-gray">
      <div className="container">
        {/* Top Section - Founder Info with 50/50 Split */}
        <div className="split-layout gap-8 md:gap-12 items-start mb-16">
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

          {/* Right - Basic Info */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
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

            <blockquote className="border-l-4 border-black pl-6 mb-6">
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                "Let's be the light, not because it's easy, but because it's necessary."
              </p>
            </blockquote>

            <p className="text-base text-gray-700 leading-relaxed">
              Leading The Gen Z Network with a vision to cultivate a successive generation of light—
              young people who understand that their existence matters and are committed to
              illuminating paths of positivity and empowerment for themselves and the world.
            </p>
          </div>
        </div>

        {/* Full Width Message Section */}
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-2xl md:text-3xl mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Founder's Message
          </h3>

          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Ladies and gentlemen, esteemed members of The Gen Z Network, and those who are
              eagerly anticipating the dawn of a new era.
            </p>
            <p>
              Welcome to this phase where brilliance and aspirations converge, where our shared
              desire to illuminate the world intertwines with the essence of our existence. Today, we
              stand on the threshold of a new narrative, where each one of us proclaims with
              unwavering certainty, <strong>"I exist!"</strong>
            </p>
            <p>
              We're often told that our generation has a multitude of issues—apparently, our attention
              spans are as short as a TikTok video, and our commitment is as flimsy as an Instagram
              story. But here we are, defying odds, disrupting norms, and proving that we're more than
              just tech-savvy individuals glued to screens. We are a generation that exists not merely
              to follow trends, but to set them, not just to dream, but to make those dreams a reality.
            </p>
            <p>
              Today, as we assemble under the banner of 'A successive generation of Light,' let's challenge
              perceptions. Let's celebrate our quirks, our individuality, and our collective
              strength. We are not just a generation; we are a force—each one of us carrying the torch
              of positivity, resilience, and innovation.
            </p>

            <blockquote className="border-l-4 border-black pl-6 my-8 bg-white p-6">
              <p className="text-xl md:text-2xl font-medium text-gray-900">
                "Our existence matters. Every 'like,' 'share,' and 'comment' doesn't define us, but our
                actions, our intentions, and our willingness to make a difference do."
              </p>
            </blockquote>

            <p>
              In a world filled with darkness, be that light! Be the light that guides, the light that
              empowers, the light that stands for justice and equality. Embrace your uniqueness, your
              flaws, your weirdness, and let them be the sparks that ignite change.
            </p>
            <p className="italic text-center text-xl my-6">
              "Because being ordinary is just so overrated, right?"
            </p>
            <p>
              Let's not just exist for existence's sake, but exist to create, to innovate, and to lead. Let's
              be the embodiment of change that we wish to see in the world. Let's amplify our voices,
              not just on social media, but in the corridors of power, in the hearts of our communities,
              and in the depths of our dreams.
            </p>
            <p>
              So, my fellow torchbearers of this "successive generation of Light," remember, your
              existence is not a coincidence; it's a statement, a declaration, and a commitment to
              making this world a better place.
            </p>
            <p className="font-semibold text-lg md:text-xl text-center bg-black text-white p-8 -mx-4 md:mx-0">
              Let's be the light, not because it's easy, but because it's necessary.
              Let's illuminate every corner, dispel every shadow, and make our existence count. Because we
              exist, we matter, and together, we shine brighter than any darkness that dares to stand in our
              way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
