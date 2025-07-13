import { NextResponse, } from 'next/server';

import type { NextRequest, } from 'next/server';

export function middleware( request : NextRequest, ) {
  // This middleware does nothing - just passes through
  return NextResponse.next();
}

// Optional: Configure which paths this middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
