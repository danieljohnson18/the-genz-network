"use client";

import React from "react";

const NewsStories = () => {
  const stories = [
    {
      category: "Impact Story",
      title: "How Mentorship Changed My Life",
      excerpt: "A Gen Z member shares their journey from uncertainty to leadership through our mentorship program.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      date: "Nov 15, 2025"
    },
    {
      category: "News",
      title: "Expanding to 50 New Cities Worldwide",
      excerpt: "The Gen Z Network announces major expansion bringing our programs to communities across the globe.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      date: "Nov 10, 2025"
    },
    {
      category: "Research",
      title: "Gen Z Mental Health: New Insights",
      excerpt: "Our latest research reveals critical findings about mental wellness in the Gen Z generation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      date: "Nov 5, 2025"
    },
    {
      category: "Event",
      title: "Global Leadership Summit 2025",
      excerpt: "Join us for our annual summit bringing together young leaders from around the world.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      date: "Nov 1, 2025"
    },
    {
      category: "Impact Story",
      title: "Building Communities in Rural Areas",
      excerpt: "How our chapters are making a difference in underserved communities.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      date: "Oct 28, 2025"
    },
    {
      category: "News",
      title: "Partnership with Major Universities",
      excerpt: "New collaborations expand educational opportunities for Gen Z Network members.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      date: "Oct 20, 2025"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2
          className="mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          News & Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <a
              key={index}
              href="#"
              className="group block no-underline hover:opacity-90 transition-opacity"
            >
              <div className="mb-4 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-xs uppercase tracking-wide mb-2 text-gray-600">
                {story.category}
              </div>
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {story.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                {story.excerpt}
              </p>
              <div className="text-xs text-gray-500">{story.date}</div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn">
            View All Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsStories;
