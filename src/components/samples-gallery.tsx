import { sampleGalleryData } from "@/lib/data";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const SamplesGallery = () => {
    return (
        <section>
            <div className="mb-8">
                <h2 className="text-3xl font-bold font-headline tracking-tight">How It Works</h2>
                <p className="text-muted-foreground mt-2">Explore pre-defined examples of our app kits and trend analysis.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                {sampleGalleryData.map((sample) => (
                    <div key={sample.id} className={`${sample.style} group relative`}>
                        <div className="absolute -inset-px bg-gradient-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
                        <Card className="relative h-full w-full overflow-hidden bg-card/60 backdrop-blur-lg border-border/20 shadow-lg flex flex-col justify-between transition-all duration-300 group-hover:bg-card/80">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl font-bold font-headline text-primary-foreground">{sample.name}</CardTitle>
                                    <div className="flex items-center gap-2 text-accent font-bold">
                                        <TrendingUp className="h-5 w-5"/>
                                        <span>{sample.score}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground pt-1 !mt-1">
                                    Query: "{sample.query}"
                                </p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80">{sample.rationale}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SamplesGallery;
