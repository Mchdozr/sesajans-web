import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const kategori = request.nextUrl.searchParams.get("kategori");
  if (request.nextUrl.pathname === "/urunler" && kategori) {
    const url = request.nextUrl.clone();
    url.pathname = `/urunler/kategori/${kategori}`;
    url.search = "";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/urunler"],
};
