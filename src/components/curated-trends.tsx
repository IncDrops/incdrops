"use client";

import { useState, useTransition } from "react";
import { Wand2, LoaderCircle } from "lucide-react";
import { getTrendReport } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

const preGeneratedReports = [
  {
    query: "Vertical farming at home",
    report: "Vertical farming is rapidly gaining traction as urban populations grow and demand for local, fresh produce increases. Smart, automated home kits are becoming a popular entry point for consumers, showing a 150% surge in search interest over the last year. Key drivers include sustainability, food security, and the wellness trend of growing one's own food. This is a strong, upward-trending market with high potential."
  },
  {
    query: "#solarpunk aesthetic",
    report: "The 'solarpunk' aesthetic is a growing cultural movement focusing on optimistic, sustainable futures. It's gaining momentum on platforms like Pinterest, TikTok, and Tumblr, influencing fashion, art, and even video game design. With a 200% increase in social media mentions, it represents a significant shift away from dystopian themes and offers opportunities in creative and sustainable product markets."
  }
];

export default function CuratedTrends() {
  const [query, setQuery] = useState("");
  const [report, setReport] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      }
    });
  };

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
                  <p className="font-bold font-headline text-lg text-primary">Query: "{item.query}"</p>
                  <p className="mt-2 text-foreground/80">{item.report}</p>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="mt-12">
            <h3 className="text-2xl font-bold font-headline tracking-tight text-center">Try it yourself</h3>
            <p className="text-muted-foreground text-center mt-2">Enter any idea, hashtag, or product to get an instant AI trend forecast.</p>
            <form onSubmit={handleSubmit} className="mt-6 max-w-2xl mx-auto flex gap-2">
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., 'NFTs in gaming' or '#cleantok'"
                    className="flex-grow"
                    disabled={isPending}
                />
                <Button type="submit" disabled={isPending} className="font-bold bg-gradient-primary text-primary-foreground animate-gradient">
                    {isPending ? (
                      <LoaderCircle className="h-5 w-5 animate-spin" />
                    ) : (
                      <Wand2 className="h-5 w-5" />
                    )}
                    <span className="hidden sm:inline ml-2">Generate</span>
                </Button>
            </form>

            {report && !isPending && (
              <div className="mt-8">
                <Card className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg animate-in fade-in">
                  <CardContent className="p-6">
                    <p className="font-bold font-headline text-lg text-primary">Report for: "{query}"</p>
                    <p className="mt-2 text-foreground/80">{report}</p>
                  </CardContent>
                </Card>
              </div>
            )}
        </div>
    </section>
  );
}
