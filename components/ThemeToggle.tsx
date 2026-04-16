"use client"
import { useTheme } from 'next-themes'
import { MoonStar, SunMedium } from 'lucide-react'
export default function ThemeToggle(){const {theme,setTheme}=useTheme();return <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="fixed bottom-4 right-4 card p-3" aria-label="Toggle theme">{theme==='dark'?<SunMedium size={16} />:<MoonStar size={16} />}</button>}
