import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the client's IP address
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Add the IP to the request headers
  requestHeaders.set("x-forwarded-for", ip)

  // Return the response with the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/api/:path*", "/claim"],
}

