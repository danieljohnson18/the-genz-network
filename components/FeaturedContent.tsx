"use client";

import React from "react";

const FeaturedContent = () => {
  const features = [
    {
      title: "Empowering Young Leaders",
      description: "Through mentorship and community engagement, we're building the next generation of changemakers.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      title: "Building Resilient Communities",
      description: "Creating safe spaces for Gen Z to connect, learn, and grow together across the globe.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
    },
    {
      title: "Mental Health & Well-being",
      description: "Prioritizing the mental and emotional wellness of our generation through support and resources.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href="#"
              className="group block no-underline hover:opacity-90 transition-opacity"
            >
              <div className="mb-4 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
