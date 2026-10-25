import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  return NextResponse.json({
    error: 'This API is no longer used. Please use the direct WhatsApp link in the frontend.'
  }, { status: 404 });
}
