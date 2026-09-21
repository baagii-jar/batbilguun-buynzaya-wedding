import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://batbilguun-buynzaya-wedding.netlify.app'),
  title: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
  description: "Аав ээж, ах дүү, найз нөхөд та бүхнийгээ манай хуримын баярт хүрэлцэн ирэхийг урьж байна.",
  openGraph: {
    title: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
    description: "2026 оны 10-р сарын 04-ний өдөр Ховд аймагт болох бидний хуримын ёслолд урьж байна.",
    url: "https://batbilguun-buynzaya-wedding.netlify.app",
    siteName: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
    locale: "mn_MN",
    type: "website",
    images: [
      {
        url: "https://batbilguun-buynzaya-wedding.netlify.app/images/Gemini_Generated_Image_svfda9svfda9svfd.jpg?v=25",
        secureUrl: "https://batbilguun-buynzaya-wedding.netlify.app/images/Gemini_Generated_Image_svfda9svfda9svfd.jpg?v=25",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
      },
    ],
  },
  facebook: {
    appId: "1600484488335139",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
    description: "2026 оны 10-р сарын 04-ний өдөр Ховд аймагт болох бидний хуримын ёслолд урьж байна.",
    images: ["https://batbilguun-buynzaya-wedding.netlify.app/images/Gemini_Generated_Image_svfda9svfda9svfd.jpg?v=25"],
  },

};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="mn"
      className={`${geistSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <head>
        <meta property="fb:app_id" content="1600484488335139" />
        <meta property="og:url" content="https://batbilguun-buynzaya-wedding.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга" />
        <meta property="og:locale" content="mn_MN" />
        <meta property="og:title" content="Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга" />
        <meta property="og:description" content="2026 оны 10-р сарын 04-ний өдөр Ховд аймагт болох бидний хуримын ёслолд урьж байна." />
        <meta property="og:image" content="https://batbilguun-buynzaya-wedding.netlify.app/images/Gemini_Generated_Image_svfda9svfda9svfd.jpg?v=25" />
        <meta property="og:image:secure_url" content="https://batbilguun-buynzaya-wedding.netlify.app/images/Gemini_Generated_Image_svfda9svfda9svfd.jpg?v=25" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга" />
        <meta name="twitter:description" content="2026 оны 10-р сарын 04-ний өдөр Ховд аймагт болох бидний хуримын ёслолд урьж байна." />
        <meta name="twitter:image" content="https://batbilguun-buynzaya-wedding.netlify.app/images/Gemini_Generated_Image_svfda9svfda9svfd.jpg?v=25" />

        <link rel="canonical" href="https://batbilguun-buynzaya-wedding.netlify.app" />
        <meta name="theme-color" content="#FAF8F5" />
      </head>
      <body className="min-h-full flex flex-col justify-start items-center bg-[var(--wedding-desktop-bg)] text-[#2C2825]">
        {children}
      </body>
    </html>
  );
}
