"use client";

import { useState, useTransition, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { Wand2, LoaderCircle } from "lucide-react";
import { getTrendReport, createCheckoutSession } from "@/app/actions";
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

export default function TryItYourself() {
  const [query, setQuery] = useState("");
  const [report, setReport] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams()

  useEffect(() => {
    const reportQuery = searchParams.get('report_query');
    const sessionId = searchParams.get('session_id');

    if (reportQuery && sessionId && !isGenerating) {
      setIsGenerating(true);
      setQuery(reportQuery);
      startTransition(async () => {
        const result = await getTrendReport(reportQuery);
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
        setIsGenerating(false);
        // Clean up URL
        window.history.replaceState(null, '', window.location.pathname);
      });
    }
  }, [searchParams, toast, isGenerating]);


  const handleCheckout = () => {
    if (!query.trim()) return;

    startTransition(async () => {
       await createCheckoutSession(query);
    });
  }

  return (
    <section>
        <div className="mt-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-center">Ready to unlock a trend? Get any report for just $1.</h2>
            <p className="text-muted-foreground text-center mt-2">Enter any idea, hashtag, or product to get an instant AI trend forecast.</p>
            <div className="mt-6 max-w-2xl mx-auto flex gap-2">
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., 'NFTs in gaming' or '#cleantok'"
                    className="flex-grow bg-card/60 backdrop-blur-lg border-border/20"
                    disabled={isPending || isGenerating}
                />
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                         <Button disabled={isPending || isGenerating || !query.trim()} className="font-bold bg-gradient-accent text-accent-foreground animate-gradient">
                            {(isPending || isGenerating) ? (
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
                        <AlertDialogAction onClick={handleCheckout} disabled={isPending}>
                            {isPending ? 'Processing...' : 'Confirm & Pay $1.00'}
                        </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            {(isGenerating || report) && (
              <div className="mt-8">
                <Card className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg animate-in fade-in">
                  <CardContent className="p-6">
                    {isGenerating && !report ? (
                        <div className="flex items-center justify-center">
                            <LoaderCircle className="h-6 w-6 animate-spin mr-2" /> 
                            <p>Generating your report after payment...</p>
                        </div>
                    ) : (
                        report && (
                            <>
                            <p className="font-bold font-headline text-lg text-accent">Report for: "{query}"</p>
                            <p className="mt-2 text-foreground/80">{report}</p>
                            </>
                        )
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
        </div>
    </section>
  );
}
