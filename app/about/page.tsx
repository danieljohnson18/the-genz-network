"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationValues from "@/components/OrganizationValues";
import OrganizationMap from "@/components/OrganizationMap";
import ExecutiveBoard from "@/components/ExecutiveBoard";
import GenZPledge from "@/components/GenZPledge";

const AboutPage = () => {
  const organizationTypes = [
    "A leadership academy",
    "A skill empowerment community",
    "A mental development network",
    "A youth advocacy organization",
    "A creative ecosystem for innovation and collaboration"
  ];

  const activities = [
    "Workshops & mentorship",
    "Community pairing systems",
    "Skill development programs",
    "Leadership pipelines",
    "Youth mental development",
    "Advocacy and public awareness campaigns",
    "Events, summits, virtual learning, and outreach"
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container">
          <h1
            className="mb-6 max-w-4xl"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.1",
              fontWeight: 600,
              letterSpacing: "-0.02em"
            }}
          >
            About The GenZ Network
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
            A Successive Generation of Light
          </p>
        </div>
      </section>

      {/* Organization Description */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What We Are
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The GenZ Network operates as a multi-faceted organization dedicated to youth empowerment and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {organizationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border-2 border-black p-8 hover:bg-black hover:text-white transition-all group"
              >
                <div className="mb-4">
                  <div className="w-8 h-1 bg-black group-hover:bg-white"></div>
                </div>
                <p
                  className="text-lg leading-snug"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {type}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Activities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We deliver impact through diverse initiatives and programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-200"
              >
                <div className="mr-4 mt-2 flex-shrink-0">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-gray">
        <div className="container">
          <div className="split-layout gap-12 items-start">
            {/* Mission */}
            <div>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The GenZ Network is a youth empowerment and development organization focused on raising a
                value-driven generation that prioritizes discipline, purpose, accountability, emotional intelligence, and
                creativity.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Through mentorship, community building, digital learning, and leadership training, we help
                young people discover themselves, develop relevant skills, and build self-confidence.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower young people with the mindset, skills, identity, and character needed to rise
                above limitations, build purposeful lives, and become a generation of light that transforms
                communities through innovation, discipline, and intentional action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Values */}
      <OrganizationValues />

      {/* Organization Map */}
      <OrganizationMap />

      {/* Executive Board */}
      <ExecutiveBoard />

      {/* GenZ Pledge */}
      <GenZPledge />

      {/* Call to Action */}
      <section className="section">
        <div className="container max-w-3xl text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join The Movement
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Be part of a global community of young leaders committed to making a difference.
            Together, we are the successive generation of light.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="btn">
              Become a Member
            </a>
            <a href="#programs" className="btn btn-outline">
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
