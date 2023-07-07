import { NextRequest, NextResponse } from "next/server";

function isPublicRoute(pathname: string) {
  const publicRoutes = [
    /^\/$/,
    /^\/_next\/static\/.*/,
    /^\/favicon\.ico$/,
    /^\/icons\/.*/,
  ];

  return publicRoutes.some((rt) => rt.test(pathname));
}

export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (isPublicRoute(url.pathname)) {
    return NextResponse.next();
  }

  console.log(`middleware:`, { pathname: url.pathname, search: url.search });
  return NextResponse.next();
}
