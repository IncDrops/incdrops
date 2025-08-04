"use client";

import { Card, CardContent } from "./ui/card";

const preGeneratedReports = [
    {
      query: "Vertical farming at home",
      report: "Interest in vertical farming is skyrocketing as urban dwellers seek sustainable, local food sources. Home kits are becoming a major entry point, with search interest up 150% year-over-year. This trend is fueled by a desire for food security, wellness, and a deeper connection to food. The market shows strong potential for high-growth, particularly in automated, user-friendly systems."
    },
    {
      query: "#solarpunk aesthetic",
      report: "The 'solarpunk' movement, an optimistic vision of a sustainable future, is gaining significant traction on social platforms like Pinterest and TikTok. Mentions have increased by 200%, influencing everything from fashion to video game design. This represents a cultural shift away from dystopian narratives and opens up opportunities for products in green technology, art, and sustainable living."
    },
    {
      query: "AI-driven personalized education",
      report: "The EdTech sector is being revolutionized by AI-powered learning platforms. These systems tailor curricula and teaching styles to individual student needs, a concept that has led to a tripling of venture capital investment in the niche over the past 18 months. While challenges around data privacy and equitable access remain, the projected 25% CAGR over the next five years indicates immense market potential."
    },
    {
        query: "Circular fashion and textile recycling tech",
        report: "As a powerful counter-movement to fast fashion, the circular economy for apparel is gaining significant consumer and investor attention. The real innovation lies in new technologies for textile recycling, allowing old garments to be broken down and re-spun into new fibers. Brands adopting these technologies are reporting a 40% increase in customer loyalty and positive sentiment, primarily driven by Gen Z's demand for sustainability. We're seeing early-stage startups in this space achieve unicorn valuations, signaling a major market shift.",
    },
    {
        query: "The future of bio-integrated architecture",
        report: "Imagine buildings that can breathe. Bio-integrated architecture, which combines living materials like algae and moss with traditional construction, aims to create self-sustaining structures. These 'living buildings' can purify air, regulate temperature, and even generate energy. While the field is still in its infancy, search queries for related terms like 'living walls' and 'biophilic design' have increased by 300%. This trend represents a long-term convergence of biotechnology, architecture, and smart city development, attracting significant research grants and media fascination.",
    },
    {
        query: "Next-gen battery technology beyond lithium-ion",
        report: "The demand for more powerful, longer-lasting, and more sustainable energy storage is a critical global need. Research into solid-state batteries, sodium-ion, and graphene-based solutions is heavily funded by both governments and private enterprise. Media coverage is intense, and patent filings have increased by 500% in the last three years. The first company to commercialize a viable alternative to lithium-ion will not just dominate a market; it will redefine multiple industries, from EVs to consumer electronics.",
    }
];

export default function CuratedTrends() {
  return (
    <section>
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-headline tracking-tight">Curated Trend Reports</h2>
            <p className="text-muted-foreground mt-2">Showcasing pre-generated AI trend reports.</p>
        </div>
        <div className="space-y-8">
            {preGeneratedReports.map((item, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg">
                <CardContent className="p-6">
                  <p className="font-bold font-headline text-lg text-accent">Query: "{item.query}"</p>
                  <p className="mt-2 text-foreground/80">{item.report}</p>
                </CardContent>
              </Card>
            ))}
        </div>
    </section>
  );
}
