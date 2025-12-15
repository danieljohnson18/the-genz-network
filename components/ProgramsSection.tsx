"use client";

import React from "react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Workshops & Mentorship",
      description: "Expert-led workshops and one-on-one mentorship programs covering leadership, personal development, and skill-building. Connect with experienced mentors who guide your journey.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Community Pairing Systems",
      description: "Join small groups and build meaningful connections with peers who share your goals and values. Collaborative learning and mutual support.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
    },
    {
      title: "Skill Development Programs",
      description: "Develop digital, creative, and leadership skills through structured programs. Build the competencies needed for the future of work.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      title: "Leadership Pipelines",
      description: "Cultivate leadership abilities through progressive training and real-world opportunities. Prepare to lead in your community and beyond.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
    },
    {
      title: "Youth Mental Development",
      description: "Access resources and support for mental health, emotional intelligence, and personal growth. Build resilience and self-awareness.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
    },
    {
      title: "Advocacy & Public Awareness",
      description: "Participate in campaigns advocating for issues affecting young people. Amplify your voice and drive meaningful change.",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop"
    },
    {
      title: "Events & Summits",
      description: "Join regional and global events, summits, and virtual learning sessions. Network with peers and leaders from around the world.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    },
    {
      title: "Regional Chapters",
      description: "Start or join a local chapter in your region. Build community, collaborate on projects, and create local impact globally.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
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
