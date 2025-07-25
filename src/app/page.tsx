import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, CheckCircle, Download, FileText, Star, Clock, Shield, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

const howItWorksSteps = [
  {
    icon: FileText,
    title: 'Submit Brief',
    description: 'Simply fill out our detailed brief to tell us exactly what you need.',
  },
  {
    icon: BrainCircuit,
    title: 'We Prompt & Refine',
    description: 'Our prompt engineering experts leverage advanced AI models to generate and refine your content.',
  },
  {
    icon: Download,
    title: 'Receive Content',
    description: 'Get high-quality, ready-to-use content delivered directly to your inbox.',
  },
];

const whyChooseUsReasons = [
  {
    icon: Star,
    title: 'Expert Prompting',
    description: 'Go beyond basic AI with our deep expertise in prompt engineering.',
  },
  {
    icon: CheckCircle,
    title: 'Unmatched Quality',
    description: 'Receive polished, human-quality content, not just raw AI output.',
  },
  {
    icon: Clock,
    title: 'Time & Cost Savings',
    description: 'Save countless hours and resources compared to traditional content creation.',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description: 'All content is AI-powered, meticulously refined for your brand.',
  },
];

const pricingTiers = [
  {
    name: 'AI Spark',
    price: '$499',
    description: 'For startups and individuals dipping their toes into AI content.',
    features: [
      '4 Blog Posts/month (up to 750 words)',
      '20 Social Media Captions/month',
      '5 AI-Generated Images/month',
      '1 Round of Revisions',
    ],
    highlight: false,
  },
  {
    name: 'AI Amplify',
    price: '$999',
    description: 'Perfect for growing businesses scaling their content strategy.',
    features: [
      '8 Blog Posts/month (up to 1000 words)',
      '40 Social Media Captions/month',
      '15 AI-Generated Images/month',
      '2 AI Video Concepts/month',
      '2 Rounds of Revisions',
    ],
    highlight: true,
  },
  {
    name: 'AI Accelerate',
    price: '$1999',
    description: 'The ultimate package for enterprises demanding high-volume, premium content.',
    features: [
      '16 Blog Posts/month (up to 1500 words)',
      '80 Social Media Captions/month',
      '30 AI-Generated Images/month',
      '5 AI Video Concepts/month',
      'Priority Support & Revisions',
    ],
    highlight: false,
  },
];

const individualServices = [
    { name: "Blog Post (500-750 words)", price: "$150" },
    { name: "Blog Post (750-1000 words)", price: "$225" },
    { name: "10 Social Media Captions", price: "$115" },
    { name: "Custom AI-Generated Image", price: "$50" },
    { name: "AI Video Script/Concept", price: "$175" },
    { name: "Short AI Video Ad Clip (15-30s)", price: "$350" },
];

const featuredPortfolioItems = [
  { category: "Images", contentType: "AI-Generated Image", keywords: "fashion, editorial, futuristic", imagePath: "/featured-portfolio-1.jpg", imageHint: "fashion futuristic" },
  { category: "Blogs", contentType: "Blog Post", keywords: "corporate, strategy, success", imagePath: "/featured-portfolio-2.jpg", imageHint: "corporate strategy" },
  { category: "Social Media", contentType: "Social Media Post", keywords: "travel, adventure, mountains", imagePath: "/featured-portfolio-3.jpg", imageHint: "travel adventure" },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh overflow-x-hidden">
      <section id="home" className="relative w-full h-dvh min-h-[700px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/50 to-background -z-10" />
         <Image
          src="/hero.jpg"
          alt="Abstract AI background"
          fill
          priority
          className="object-cover absolute inset-0 opacity-10 -z-20"
        />
        <AnimatedWrapper className="container px-4 md:px-6">
          <div className="grid gap-6">
            <h1 className="font-headline tracking-tighter text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
              IncDrops: Your AI Content Authority.
            </h1>
            <p className="font-headline mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Masterful Prompt Engineering for Stunning Blogs, Visuals & More. Unlock the true potential of AI with our expert-crafted content, delivered directly to you. Efficiency meets excellence.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                <Link href="#services">View Services & Pricing</Link>
              </Button>
            </div>
          </div>
        </AnimatedWrapper>
      </section>

      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple, streamlined process to get you the content you need, fast.
            </p>
          </AnimatedWrapper>
          <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-2 md:gap-16 lg:max-w-none lg:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <AnimatedWrapper key={step.title} delay={index * 150}>
                <div className="grid gap-4 text-center p-6 rounded-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedWrapper className="space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Why Choose IncDrops?</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We combine AI efficiency with human expertise to deliver content that truly performs.
              </p>
            </AnimatedWrapper>
            <div className="grid gap-6">
              {whyChooseUsReasons.map((reason, index) => (
                <AnimatedWrapper key={reason.title} delay={index * 150}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 mt-1">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-headline">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
      
       <section id="featured-portfolio" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <AnimatedWrapper className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Featured Examples</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the quality and creativity we deliver.
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper delay={200}>
            <Carousel opts={{ loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {featuredPortfolioItems.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <PortfolioCard {...item} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
             <div className="text-center mt-8">
                <Button asChild variant="link" className="text-lg text-accent">
                    <Link href="#portfolio">See Full Portfolio <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section id="testimonial" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper className="mx-auto max-w-3xl text-center">
            <div className="p-8 rounded-xl bg-background/50 backdrop-blur-sm border-border/20">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                “IncDrops transformed our content pipeline. The quality is exceptional, and the time we've saved is invaluable. It's like having a world-class content team on-demand.”
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold">Jane Doe, CEO</div>
                <div className="text-sm text-muted-foreground">Stellar Solutions Inc.</div>
              </div>
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                  <Link href="#services">Ready to Transform Your Content?</Link>
                </Button>
              </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Flexible AI Content Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Leverage our prompt engineering expertise with transparent, tiered pricing.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, index) => (
              <AnimatedWrapper key={tier.name} delay={index * 150}>
                <Card className={`flex flex-col h-full rounded-2xl ${tier.highlight ? 'border-primary shadow-2xl shadow-primary/20 bg-background' : 'bg-background/50 backdrop-blur-sm border-border/20'}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-4xl font-extrabold font-headline mb-4">{tier.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                    <ul className="space-y-3">
                      {tier.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className={`w-full rounded-full ${tier.highlight ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' : ''}`}>
                      <Link href="#contact">Get Started with {tier.name}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            All tiers include standard rounds of minor revisions. Custom plans are available upon request.
          </p>

           <div className="mt-24">
              <AnimatedWrapper>
                <h3 className="text-2xl font-bold font-headline tracking-tighter text-center mb-8">One-Off Services</h3>
                <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {individualServices.map((service) => (
                        <div key={service.name} className="flex justify-between border-b border-dashed py-2">
                            <span className="text-muted-foreground">{service.name}</span>
                            <span className="font-semibold">{service.price}</span>
                        </div>
                    ))}
                </div>
              </AnimatedWrapper>
            </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 lg:py-32 bg-secondary/30">
          <AnimatedWrapper className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">See the Power of Prompt Engineering</h2>
             <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Explore a curated selection of AI-generated content, refined by our experts.
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper delay={200}>
            <PortfolioGrid />
          </AnimatedWrapper>
      </section>

      <section id="contact" className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Ready to Elevate Your Content?</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              For custom quotes or questions, please email us directly or fill out our detailed client brief form.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="mailto:ai@incdrops.com">
                  <Mail className="mr-2 h-5 w-5" /> ai@incdrops.com
                </a>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                <Link href="/brief-form">Fill Out Brief Form</Link>
              </Button>
            </div>
             <div className="mt-12 text-muted-foreground">
                <p>Or connect with us on social media:</p>
                <div className="flex justify-center space-x-6 mt-4">
                   <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-6 w-6" />
                    </Link>
                </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

    
