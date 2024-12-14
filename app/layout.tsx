import "./globals.css";
import {
  Open_Sans,
  Cinzel,
  Cinzel_Decorative
} from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--open-sans'
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--cinzel'
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--cinzel-dec'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${cinzel.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
