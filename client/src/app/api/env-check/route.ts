import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'Not set',
    NODE_ENV: process.env.NODE_ENV || 'Not set',
    timestamp: new Date().toISOString()
  });
}
