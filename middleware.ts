import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  console.log('\n=== Middleware Triggered ===');
  console.log('Path:', pathname);
  console.log('Method:', request.method);
  
  // Only exclude the time route from redirection to prevent loops
  if (pathname === '/api/time' || pathname === '/api/time/') {
    console.log('Skipping redirection for time route');
    return NextResponse.next();
  }
  
  // Redirect all other API routes to /api/time
  if (pathname.startsWith('/api/')) {
    console.log('Redirecting to /api/time');
    const url = request.nextUrl.clone();
    url.pathname = '/api/time';
    return NextResponse.redirect(url);
  }
  
  console.log('No redirection needed');
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
