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
                    <p className="text-sm text-muted-foreground pt-1">Last Updated: August 5, 2025</p>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80">
                    <p>Your privacy is important to us. This Privacy Policy explains what IncDrops collects, how we use it, and your rights concerning that information. This policy applies to all information collected through our website, incdrops.com.</p>
                    
                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">1. Information We Collect</h3>
                    <p>We collect information to provide and improve our services to you. This includes:</p>
                    <p><strong>Personal Information:</strong> When you use our services (e.g., to send an inquiry or process a payment), we may collect personal details such as your name, email address, and payment information. This information is necessary to deliver our services and communicate with you.</p>
                    <p><strong>Query Data:</strong> When you enter a query (an idea, hashtag, or product) into our AI, this data is collected. We use this information to generate your specific trend report and to improve the overall accuracy and functionality of our AI models.</p>
                    <p><strong>Non-Personal Information:</strong> We automatically collect certain non-personal data when you visit our site. This may include your IP address, browser type, device information, and a record of the pages you visit. This data helps us understand how our service is used and allows us to make improvements.</p>

                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">2. How We Use Your Information</h3>
                    <p>The information we collect is used for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Service Delivery:</strong> To generate and deliver the trend reports you've purchased.</li>
                        <li><strong>Transactions:</strong> To securely process your payment for reports.</li>
                        <li><strong>Communication:</strong> To respond to your inquiries and send you important updates about our services.</li>
                        <li><strong>Service Improvement:</strong> To analyze usage patterns and feedback, which helps us enhance our AI, website functionality, and user experience.</li>
                    </ul>

                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">3. Information Sharing</h3>
                    <p>We do not sell your personal information to third parties. We will only share your information in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Service Providers:</strong> We may share your information with trusted third-party services that help us operate our website and process payments (e.g., payment processors). These providers are contractually obligated to protect your information.</li>
                        <li><strong>Legal Compliance:</strong> We will disclose your information if we are legally required to do so by law, court order, or governmental regulation.</li>
                    </ul>

                    <h3 className="font-bold text-xl pt-4 font-headline text-primary-foreground">4. Data Security</h3>
                    <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.</p>
                </CardContent>
            </Card>
        </div>
      </main>

      <footer className="w-full mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator />
          <div className="flex flex-col sm:flex-row justify-between items-center py-8 text-muted-foreground text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2">
              <span>© {new Date().getFullYear()} IncDrops.com. All rights reserved.</span>
              <span>Questions? Send inquiries to info@incdrops.com</span>
            </div>
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
