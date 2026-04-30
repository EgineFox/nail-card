import { Geist, Geist_Mono, Great_Vibes, Frank_Ruhl_Libre  } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

const frankRuhl = Frank_Ruhl_Libre({ weight: ['400', '700'], subsets: ['hebrew'], variable: '--font-frank-ruhl' })

export const metadata = {
  title: "Anna Kyrychenko - your best nailmaster",
  description: "Good vibes starts from your nails",
};

export default function RootLayout({ children }) {
  return (

    <html lang="ru">
      <body className={`${greatVibes.variable} ${frankRuhl.variable}`}>
        {children}
      </body>
    </html>
  );
}



