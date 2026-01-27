import { NextResponse } from 'next/server';

export default async function handler(request: Request) {
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
