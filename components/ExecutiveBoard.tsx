"use client";

import React from "react";

const ExecutiveBoard = () => {
  const boardMembers = [
    {
      name: "Gift Chinonso Agodi",
      title: "FOUNDER",
      bio: `Gift Chinonso Agodi is the founder of The Gen Z Network. She is a visionary leader. Dedicated to redefining the narrative around her generation. She actively challenges common stereotypes that label young people as lazy or distracted, arguing instead that Gen Z is a resilient force of innovation capable of setting standards rather than just following them. Identifying her peers as a "successive generation of Light," Gift champions a philosophy where impact is measured by real-world actions and leadership, rather than social media metrics like likes and shares.`,
      image: "https://genzphere.netlify.app/images/founder1.png"
    },
    {
      name: "Tochi Onuchukwu",
      title: "CTO",
      bio: `Tochi Onuchukwu is a technology and social impact professional committed to building transformative solutions that empower individuals and communities. With experience across technology, social impact, and the creative industries, he works at the intersection of innovation and social change, designing and leading projects that help young people and advance sustainable development. Recognized as one of Changemakers100's rising global impact voices, Tochi is driven by a bold vision for an equitable future for all children and youth. He champions initiatives that blend creativity, technology, and impact to reimagine new possibilities and deliver meaningful and scalable change.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Nana Eronini",
      title: "GLOBAL COORDINATOR",
      bio: `Nana Eronini is what some may call an 'Enigma' or 'Eccentric'. A box of many talents and a master in her crafts. Beyond being the host of the a fast-rising podcast show "iTalk with Nana" that is available on all streaming platforms and YouTube, she is also the owner of a unique accessories business "NanasAccessories", a seasoned writer who specializes in articles, personal blogs and content creation, a singer, a model and a certified Environmental Health Officer. She thrives at excellence and always seeks out the good in people. Nana Eronini looks past social media validation and believes that a good legacy supersedes the present status.`,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
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
            Meet Our Executive Board
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The visionary leaders driving our mission forward
          </p>
        </div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {boardMembers.map((member, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Image Section */}
              <div className={`md:col-span-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative">
                  {/* Red circular background */}
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-red-500 rounded-full -z-10"></div>

                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-gray-200 rounded-[10px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`md:col-span-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3
                  className="text-3xl md:text-4xl mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {member.name}
                </h3>
                <div
                  className="text-xl md:text-2xl mb-6"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    color: "#E74C3C"
                  }}
                >
                  {member.title}
                </div>

                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom icon */}
        {/* <div className="flex justify-center mt-16">
          <div className="w-16 h-16 flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3"/>
              <text x="50" y="65" fontSize="40" fontWeight="bold" fill="currentColor" textAnchor="middle">14</text>
              <path d="M 35 20 L 50 10 L 65 20 M 50 10 L 50 35" stroke="currentColor" strokeWidth="3"/>
              <circle cx="30" cy="30" r="3" fill="currentColor"/>
              <circle cx="70" cy="30" r="3" fill="currentColor"/>
              <circle cx="50" cy="85" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ExecutiveBoard;
