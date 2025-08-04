import HeaderSection from '@/components/header-section';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground isolate">
      <div className="fixed inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
      <div className="fixed inset-0 -z-9 pointer-events-none bg-[radial-gradient(circle_at_50%_200px,#E6E6FA66,transparent)] dark:bg-[radial-gradient(circle_at_50%_200px,#B0E2FF33,transparent)]"></div>
      
      <HeaderSection />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-16">
            <Card className="bg-card/60 backdrop-blur-lg border-border/20 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline tracking-tight">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80">
                    <p>Your privacy is important to us. It is IncDrops's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
                    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">Information We Collect</h3>
                    <p>We may collect personal information from you such as your name, email address, and payment information when you use our services. We may also collect non-personal information, such as your IP address and browsing behavior, to improve our services.</p>
                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">Use of Information</h3>
                    <p>The information we collect is used to provide and improve our services, process transactions, and communicate with you. We do not share your personal information with third parties, except as required by law.</p>
                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">Security</h3>
                    <p>We take reasonable precautions to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.</p>
                </CardContent>
            </Card>
        </div>
      </main>

      <footer className="w-full mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="flex flex-col sm:flex-row justify-between items-center py-8 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} IncDrops.com. All rights reserved.</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
                <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
