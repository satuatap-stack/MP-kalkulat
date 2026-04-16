"use client"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import InputForm from '@/components/InputForm'
import OutputTable from '@/components/OutputTable'
import MetricsDict from '@/components/MetricsDict'
import BukuKas from '@/components/BukuKas'
export default function Page(){const [results,setResults]=useState<any>(null);return <main className="max-w-7xl mx-auto space-y-4"><div className="card p-4 md:p-6"><h1 className="text-xl md:text-2xl font-bold">Marketplace Finance Tools</h1><p className="text-xs text-slate-500 mt-1">Versi app dari workbook Shopee/TikTok Shop</p></div><Tabs defaultValue="shopee" className="space-y-4"><TabsList className="grid grid-cols-4 gap-2 card p-2"><TabsTrigger value="shopee" className="btn bg-slate-100 dark:bg-slate-800">Shopee</TabsTrigger><TabsTrigger value="tiktok" className="btn bg-slate-100 dark:bg-slate-800">TikTok</TabsTrigger><TabsTrigger value="kas" className="btn bg-slate-100 dark:bg-slate-800">Buku Kas</TabsTrigger><TabsTrigger value="kamus" className="btn bg-slate-100 dark:bg-slate-800">Kamus</TabsTrigger></TabsList><TabsContent value="shopee"><InputForm platform="shopee" onResults={setResults}/>{results&&<OutputTable results={results}/>}</TabsContent><TabsContent value="tiktok"><InputForm platform="tiktok" onResults={setResults}/>{results&&<OutputTable results={results}/>}</TabsContent><TabsContent value="kas"><BukuKas/></TabsContent><TabsContent value="kamus"><MetricsDict/></TabsContent></Tabs></main>}
