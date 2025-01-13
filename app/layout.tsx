import "./globals.css";
import {
  Open_Sans,
  Cinzel,
  Cinzel_Decorative
} from 'next/font/google'
import type { Metadata } from 'next'
import StoryblokProvider from '@/components/StoryblokProvider'
import { initStoryblok } from '@/storyblok'
// import NavBar from '@/components/_navigation/NavBar'
// import Footer from '@/components/_navigation/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Tennyson Flint',
    template: '%s | Tennyson Flint'
  },
  metadataBase: new URL('https://tennysonflint.com')
}

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

initStoryblok()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body
          className={`${openSans.variable} ${cinzel.variable} ${cinzelDecorative.variable} antialiased relative flex flex-col`}
          >
          {/* <NavBar /> */}
          <StoryblokProvider>
            {children}
          </StoryblokProvider>
          {/* <Footer/> */}
        </body>
    </html>
  );
}
