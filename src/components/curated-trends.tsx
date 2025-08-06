"use client";

import { Card, CardContent } from "./ui/card";

const preGeneratedReports = [
    {
      query: "Vertical Farming at Home",
      report: `
        <h3 class="text-lg font-bold font-headline text-primary-foreground mb-2">Trend Report: Vertical Farming at Home</h3>
        <p class="mb-4"><strong>Summary:</strong> Vertical farming at home is an emerging trend driven by increased consumer interest in sustainability, healthy eating, and space-saving gardening solutions. This report analyzes the key drivers, current market landscape, technological advancements, and potential future developments of this trend.</p>
        <p class="mb-2"><strong>Key Drivers:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Sustainability:</strong> Consumers are increasingly aware of the environmental impact of traditional agriculture and are seeking ways to reduce their carbon footprint. Vertical farming offers a more sustainable alternative by reducing water consumption, land usage, and transportation emissions.</li>
            <li><strong>Healthy Eating:</strong> Growing food at home allows individuals to control the quality and freshness of their produce, ensuring access to healthy and nutritious food.</li>
            <li><strong>Space Constraints:</strong> Urban dwellers often lack access to traditional gardens. Vertical farming provides a solution for growing food in small spaces, such as apartments and balconies.</li>
            <li><strong>Technology Advancements:</strong> The development of affordable and user-friendly vertical farming systems has made it easier for consumers to grow food at home.</li>
        </ul>
        <p class="mb-2"><strong>Current Market Landscape:</strong></p>
        <p class="mb-4">The market for vertical farming at home is currently in its early stages of development but is experiencing rapid growth. Key players include companies offering complete systems, manufacturers of grow lights and hydroponic equipment, and specialized seed suppliers.</p>
        <p class="mb-2"><strong>Technological Advancements:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
            <li><strong>LED Lighting:</strong> Energy-efficient LED lights provide optimal growing conditions.</li>
            <li><strong>Hydroponics and Aeroponics:</strong> Soilless growing methods allow for efficient use of water and nutrients.</li>
            <li><strong>Automated Systems:</strong> Automated systems for watering, lighting, and nutrient delivery reduce manual labor.</li>
            <li><strong>Smart Technology:</strong> Integration with smartphone apps allows for remote monitoring and control.</li>
        </ul>
        <p class="mb-2"><strong>Future Developments:</strong></p>
        <p class="mb-4">The future looks promising, with potential for increased automation, personalized growing plans, integration with smart homes, a wider variety of crops, and lower costs.</p>
        <p><strong>Conclusion:</strong> Vertical farming at home is a promising trend with the potential to transform how people grow and consume food. As technology advances and consumer awareness grows, this trend is expected to gain even more momentum.</p>
      `
    },
    {
      query: "#solarpunk aesthetic",
      report: `
        <h3 class="text-lg font-bold font-headline text-primary-foreground mb-2">Trend Report: #solarpunk Aesthetic</h3>
        <p class="mb-4"><strong>Summary:</strong> The 'solarpunk' movement, an optimistic vision of a sustainable future powered by renewable energy, is gaining significant traction on social platforms. This report explores its key drivers, influence on various markets, and future potential.</p>
        <p class="mb-2"><strong>Key Drivers:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Cultural Shift:</strong> A growing desire for positive, hopeful narratives about the future, in contrast to prevalent dystopian themes.</li>
            <li><strong>Environmentalism:</strong> Increased awareness and concern about climate change are fueling interest in sustainable lifestyles and aesthetics.</li>
            <li><strong>Visual Appeal:</strong> The lush, green, and technologically integrated aesthetic is highly shareable and popular on visual platforms like Instagram and Pinterest.</li>
        </ul>
        <p class="mb-2"><strong>Current Market Landscape:</strong></p>
        <p class="mb-4">The trend is influencing fashion, with a focus on natural fibers and upcycled materials; architecture, with concepts like living walls and biophilic design; and entertainment, particularly in indie video games and speculative fiction.</p>
        <p class="mb-2"><strong>Technological Advancements:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Renewable Energy Tech:</strong> Advances in personal solar panels and energy storage are making the solarpunk vision more attainable.</li>
            <li><strong>3D Printing:</strong> Enables the creation of custom, sustainable products and architectural components.</li>
            <li><strong>Biomaterials:</strong> Development of new materials from algae and fungi for use in clothing and construction.</li>
        </ul>
        <p class="mb-2"><strong>Future Developments:</strong></p>
        <p class="mb-4">Expect to see solarpunk principles integrated into mainstream urban planning, consumer products, and corporate sustainability initiatives. The aesthetic will likely evolve, blending with other trends like cottagecore and cyberpunk.</p>
        <p><strong>Conclusion:</strong> Solarpunk is more than just an aesthetic; it's a cultural movement with the potential to shape a more sustainable and optimistic future across multiple industries.</p>
      `
    },
    {
      query: "AI-driven personalized education",
      report: `
        <h3 class="text-lg font-bold font-headline text-primary-foreground mb-2">Trend Report: AI-Driven Personalized Education</h3>
        <p class="mb-4"><strong>Summary:</strong> AI-powered learning platforms are revolutionizing the EdTech sector by tailoring curricula and teaching styles to individual student needs. This report examines the drivers, market landscape, key technologies, and future outlook for this transformative trend.</p>
        <p class="mb-2"><strong>Key Drivers:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Personalized Learning:</strong> AI can identify individual learning gaps and strengths, creating a more effective and engaging educational experience.</li>
            <li><strong>Accessibility:</strong> AI tools can provide on-demand tutoring and support, making quality education more accessible to a wider audience.</li>
            <li><strong>Efficiency:</strong> Automation of administrative tasks like grading frees up educators to focus on teaching and mentorship.</li>
        </ul>
        <p class="mb-2"><strong>Current Market Landscape:</strong></p>
        <p class="mb-4">The market is seeing a surge in startups and investment, with major tech companies also entering the space. Key areas include language learning apps, adaptive testing platforms, and corporate training software.</p>
        <p class="mb-2"><strong>Technological Advancements:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Natural Language Processing (NLP):</strong> Enables AI tutors to understand and respond to student questions in a human-like way.</li>
            <li><strong>Machine Learning:</strong> Algorithms analyze student performance data to create adaptive learning paths.</li>
            <li><strong>Predictive Analytics:</strong> Helps identify at-risk students and provides early intervention strategies.</li>
        </ul>
        <p class="mb-2"><strong>Future Developments:</strong></p>
        <p class="mb-4">Future developments include more sophisticated AI tutors, immersive learning experiences using AR/VR, and lifelong learning companions that support individuals throughout their careers.</p>
        <p><strong>Conclusion:</strong> AI-driven personalized education has the potential to create a more equitable and effective learning landscape, though challenges around data privacy and the digital divide must be addressed.</p>
      `
    }
];


export default function CuratedTrends() {
  return (
    <section>
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-headline tracking-tight">Curated Trend Reports</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl">Explore our pre-generated trend reports to see how trends emerge and where they're headed. Use our AI to forecast your own idea and get the insights you need to inspire your next big project. Every report is a blueprint for what's next.</p>
        </div>
        <div className="space-y-8">
            {preGeneratedReports.map((item, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg">
                <CardContent className="p-6">
                  <p className="font-bold font-headline text-lg text-accent">Query: "{item.query}"</p>
                  <div className="mt-4 text-foreground/80" dangerouslySetInnerHTML={{ __html: item.report }} />
                </CardContent>
              </Card>
            ))}
        </div>
    </section>
  );
}
