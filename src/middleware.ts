import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function middleware(request: NextApiRequest) {
  const user = "";

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Add the route path in matcher, it included in protected route
export const config = {
  matcher: ["/admin"],
};
