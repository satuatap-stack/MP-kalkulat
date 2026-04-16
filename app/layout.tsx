import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '@/components/ThemeToggle'
const inter=Inter({subsets:['latin'],variable:'--font-inter'})
export const metadata: Metadata={title:'Marketplace Finance App',description:'Shopee TikTok finance tools'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id" suppressHydrationWarning><body className={inter.variable}><ThemeProvider attribute="class" defaultTheme="system" enableSystem><div className="min-h-screen p-4 md:p-6">{children}</div><ThemeToggle/></ThemeProvider></body></html>}
