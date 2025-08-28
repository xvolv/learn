import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Only redirect API routes that aren't /api/time
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/time')) {
    return NextResponse.redirect(new URL('/api/time', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
