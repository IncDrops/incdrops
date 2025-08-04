import HeaderSection from '@/components/header-section';
import InquiryModule from '@/components/inquiry-module';
import SamplesGallery from '@/components/samples-gallery';
import CuratedTrends from '@/components/curated-trends';
import DynamicAdCards from '@/components/dynamic-ad-cards';
import BlogSection from '@/components/blog-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground isolate">
      <div className="fixed inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
      <div className="fixed inset-0 -z-9 pointer-events-none bg-[radial-gradient(circle_at_50%_200px,#a7a7f033,transparent)] dark:bg-[radial-gradient(circle_at_50%_200px,#2a2a6033,transparent)]"></div>
      
      <HeaderSection />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sticky top-[73px] z-30 py-4 -mx-4 px-4 bg-background/80 backdrop-blur-lg">
          <InquiryModule />
        </div>
        <div className="pt-12 space-y-24 md:space-y-32">
          <SamplesGallery />
          <CuratedTrends />
          <DynamicAdCards />
          <BlogSection />
        </div>
      </main>

      <footer className="w-full mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="text-center py-8 text-muted-foreground">
            © {new Date().getFullYear()} TrendSeer by IncDrops.com. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
