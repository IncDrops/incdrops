"use client";

import { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { Button } from './ui/button';
import { AnimatedWrapper } from './AnimatedWrapper';

const portfolioItems = [
  { category: "Images", contentType: "AI-Generated Image", keywords: "technology, abstract, data visualization", imagePath: "/portfolio-1.jpg", imageHint: "technology abstract" },
  { category: "Blogs", contentType: "Blog Post", keywords: "cybersecurity, future, network", imagePath: "/portfolio-2.jpg", imageHint: "cybersecurity network" },
  { category: "Social Media", contentType: "Social Media Ad", keywords: "fashion, luxury, lifestyle", imagePath: "/portfolio-3.jpg", imageHint: "fashion lifestyle" },
  { category: "Images", contentType: "Product Mockup", keywords: "cosmetics, branding, clean", imagePath: "/portfolio-4.jpg", imageHint: "cosmetics branding" },
  { category: "Video Concepts", contentType: "Video Concept", keywords: "adventure, travel, drone shot", imagePath: "/portfolio-5.jpg", imageHint: "adventure travel" },
  { category: "Blogs", contentType: "Blog Post", keywords: "finance, investment, growth", imagePath: "/portfolio-6.jpg", imageHint: "finance growth" },
  { category: "Images", contentType: "Architectural Render", keywords: "modern, sustainable, architecture", imagePath: "/portfolio-7.jpg", imageHint: "modern architecture" },
  { category: "Social Media", contentType: "Social Media Post", keywords: "food, recipe, delicious", imagePath: "/portfolio-8.jpg", imageHint: "food recipe" },
  { category: "Video Concepts", contentType: "Animated Explainer", keywords: "startup, technology, simple", imagePath: "/portfolio-9.jpg", imageHint: "startup technology" }
];

const categories = ["All", "Blogs", "Social Media", "Images", "Video Concepts"];

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="rounded-full transition-all duration-300"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
           <AnimatedWrapper key={`${filter}-${index}`} delay={index * 100}>
                <PortfolioCard {...item} />
           </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}
