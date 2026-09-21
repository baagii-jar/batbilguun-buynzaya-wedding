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
  metadataBase: new URL('https://batbilguun-buynzaya-wedding.vercel.app'),
  title: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
  description: "Аав ээж, ах дүү, найз нөхөд та бүхнийгээ манай хуримын баярт хүрэлцэн ирэхийг урьж байна.",
  openGraph: {
    title: "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга",
    description: "2026 оны 10-р сарын 04-ний өдөр Ховд аймагт болох бидний хуримын ёслолд урьж байна.",
    images: [
      {
        url: '/images/cover123.png',
        alt: 'Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга',
      },
    ],
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="mn"
      className={`${geistSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-start items-center bg-[var(--wedding-desktop-bg)] text-[#2C2825]">
        {children}
      </body>
    </html>
  );
}
