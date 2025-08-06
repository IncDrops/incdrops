import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'IncDrops',
  description: "Go from idea to insight in seconds. Our AI-powered platform delivers instant, curated trend reports for ideas, hashtags, products, and more. Stop guessing, and start seeing what's next.",
  icons: {
    icon: '/inc-icon.png',
    shortcut: { url: "/inc-icon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false" async></script>
        <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false" async></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}} />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ML7XDP8M');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ML7XDP8M"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
