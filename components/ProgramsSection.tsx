"use client";

import React from "react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Mentorship Programs",
      description: "Connect with experienced mentors who guide your personal and professional journey. Our one-on-one mentorship pairs you with leaders in your field of interest.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Workshops & Training",
      description: "Develop essential skills through expert-led workshops covering leadership, psychology, career development, and personal growth.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
    },
    {
      title: "Community Service",
      description: "Make a tangible impact through organized service projects in your community. From local initiatives to global campaigns.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      title: "Mental Health Support",
      description: "Access resources, counseling, and support groups through our network of mental health professionals and peer supporters.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
    },
    {
      title: "Cultural Exchange",
      description: "Participate in global exchanges that broaden perspectives, build connections, and celebrate diversity across cultures.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
    },
    {
      title: "Regional Chapters",
      description: "Join or start a local chapter and build a community in your region. Connect with members near you for local impact.",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="section section-gray">
      <div className="container">
        <h2
          className="mb-4 text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Programs
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Actionable programs designed to empower and support Gen Z in their journey
          towards personal excellence and community impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {program.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {program.description}
                </p>
                <a href="#" className="text-sm font-medium no-underline hover:opacity-70">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
