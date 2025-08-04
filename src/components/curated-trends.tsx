"use client";

import { useState, useTransition } from "react";
import { Wand2, LoaderCircle } from "lucide-react";
import { getTrendReport } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const preGeneratedReports = [
  {
    query: "Vertical farming at home",
    report: "Vertical farming is rapidly gaining traction as urban populations grow and demand for local, fresh produce increases. Smart, automated home kits are becoming a popular entry point for consumers, showing a 150% surge in search interest over the last year. Key drivers include sustainability, food security, and the wellness trend of growing one's own food. This is a strong, upward-trending market with high potential."
  },
  {
    query: "#solarpunk aesthetic",
    report: "The 'solarpunk' aesthetic is a growing cultural movement focusing on optimistic, sustainable futures. It's gaining momentum on platforms like Pinterest, TikTok, and Tumblr, influencing fashion, art, and even video game design. With a 200% increase in social media mentions, it represents a significant shift away from dystopian themes and offers opportunities in creative and sustainable product markets."
  },
  {
    query: "AI-driven personalized education",
    report: "The EdTech sector is experiencing a seismic shift with the advent of AI-driven personalized learning platforms. These systems adapt curricula, pace, and teaching styles to individual student needs, promising to revolutionize education. Venture capital investment in this niche has tripled in the last 18 months, and parent/educator interest is at an all-time high. The primary challenge is ensuring equitable access and addressing data privacy concerns, but the market potential is immense, with a projected CAGR of 25% over the next five years."
  },
  {
    query: "Circular fashion and textile recycling tech",
    report: "As a counter-movement to fast fashion, the circular economy for apparel is gaining significant momentum. This isn't just about thrifting; it's about technological innovation in textile recycling that allows old garments to be broken down and re-spun into new fibers. Brands adopting these technologies are seeing a 40% increase in customer loyalty and positive brand sentiment. The trend is driven by Gen Z's demand for sustainability, and we're seeing early-stage startups in this space achieve unicorn valuations."
  },
  {
    query: "The future of bio-integrated architecture",
    report: "Imagine buildings that breathe. Bio-integrated architecture combines living materials like algae and moss with traditional construction to create self-sustaining structures. These 'living buildings' can purify air, regulate temperature, and even generate energy. While still in its infancy, search queries for 'living walls' and 'biophilic design' have increased by 300%. This trend represents a long-term convergence of biotechnology, architecture, and smart city development, attracting significant research grants and media fascination."
  }
];

export default function CuratedTrends() {
  const [query, setQuery] = useState("");
  const [report, setReport] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGeneration = () => {
    if (!query.trim()) return;

    startTransition(async () => {
      const result = await getTrendReport(query);
      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
        setReport(null);
      } else {
        setReport(result.report);
        toast({
            title: "Report Generated!",
            description: "Your AI-powered trend forecast is ready.",
        });
      }
    });
  }

  return (
    <section>
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-headline tracking-tight">Curated Trend Reports</h2>
            <p className="text-muted-foreground mt-2">Showcasing pre-generated AI trend reports and a live demo.</p>
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

        <div className="mt-12">
            <h3 className="text-2xl font-bold font-headline tracking-tight text-center">Try it yourself</h3>
            <p className="text-muted-foreground text-center mt-2">Enter any idea, hashtag, or product to get an instant AI trend forecast.</p>
            <div className="mt-6 max-w-2xl mx-auto flex gap-2">
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., 'NFTs in gaming' or '#cleantok'"
                    className="flex-grow bg-card/60 backdrop-blur-lg border-border/20"
                    disabled={isPending}
                />
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                         <Button disabled={isPending || !query.trim()} className="font-bold bg-gradient-accent text-accent-foreground animate-gradient">
                            {isPending ? (
                            <LoaderCircle className="h-5 w-5 animate-spin" />
                            ) : (
                            <Wand2 className="h-5 w-5" />
                            )}
                            <span className="hidden sm:inline ml-2">Generate</span>
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Report Generation</AlertDialogTitle>
                        <AlertDialogDescription>
                            You are about to generate an AI-powered trend report for the query: <span className="font-bold text-accent">"{query}"</span>.
                            <br/><br/>
                            The cost for this report is <span className="font-bold text-accent">$1.00</span>. This is a non-refundable charge. Do you wish to proceed?
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleGeneration}>
                            Confirm & Pay $1.00
                        </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            {report && !isPending && (
              <div className="mt-8">
                <Card className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg animate-in fade-in">
                  <CardContent className="p-6">
                    <p className="font-bold font-headline text-lg text-accent">Report for: "{query}"</p>
                    <p className="mt-2 text-foreground/80">{report}</p>
                  </CardContent>
                </Card>
              </div>
            )}
        </div>
    </section>
  );
}
