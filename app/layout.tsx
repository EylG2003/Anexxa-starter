import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Anexxa — POS & BNPL',
  description: 'Payments that include everyone — POS for banks, BNPL for shoppers.',
}

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-emerald-500 via-teal-600 to-blue-700 text-white min-h-screen`}> 
        <Navbar />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
