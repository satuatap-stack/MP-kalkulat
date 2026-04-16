import { NextRequest, NextResponse } from 'next/server'
import { calculateTikTok } from '@/lib/calculations'
export async function POST(req:NextRequest){const body=await req.json();return NextResponse.json(calculateTikTok(body))}
