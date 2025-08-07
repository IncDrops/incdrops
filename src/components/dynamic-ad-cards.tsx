"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { adCardsData } from "@/lib/data";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

const AdCard = ({ ad }: { ad: typeof adCardsData[0] }) => (
    <div className="relative group rounded-2xl">
        <div className="absolute -inset-1 bg-gradient-accent blur opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient"></div>
        <div className="relative p-6 bg-card/80 backdrop-blur-lg h-full flex flex-col gap-6">
            <div className="aspect-video w-full relative rounded-lg">
                <Image
                    src={ad.image}
                    alt={ad.industry}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-2xl rounded-lg"
                    data-ai-hint={ad['data-ai-hint']}
                />
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <div>
                    <Badge variant="secondary" className="mb-4">{ad.industry}</Badge>
                    <p className="text-foreground/80 mb-4">{ad.content}</p>
                </div>
                <Button asChild className="w-full font-bold bg-accent text-accent-foreground mt-auto">
                    <a href={ad.link} target="_blank" rel="noopener noreferrer">
                        {ad.ctaText}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
        </div>
    </div>
);


const DynamicAdCards = () => {
    const [shuffledAds, setShuffledAds] = useState<typeof adCardsData>([]);

    useEffect(() => {
        // Shuffle ads on client-side to avoid hydration mismatch
        setShuffledAds([...adCardsData].sort(() => Math.random() - 0.5));
    }, []);
    
    return (
        <section>
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold font-headline tracking-tight">Featured Opportunities</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Explore affiliate offers and services from our partners across leading industries.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {shuffledAds.slice(0, 2).map((ad) => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {shuffledAds.slice(2, 5).map((ad) => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
        </section>
    );
};

export default DynamicAdCards;