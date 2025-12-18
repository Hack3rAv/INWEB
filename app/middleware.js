import { NextResponse } from "next/server";
import { config } from "../config";

export function middleware(req) {
    const { pathname } = req.nextUrl;

    // Maintenance mode redirect
    if (config.maintenance && !pathname.startsWith("/maintenance")) {
        return NextResponse.redirect(new URL("/maintenance", req.url));
    }

    return NextResponse.next();
}
