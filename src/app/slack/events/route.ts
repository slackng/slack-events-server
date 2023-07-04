import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (body["type"] === "url_verification") {
        return new NextResponse(JSON.stringify({ "challenge": body["challenge"] }), { status: 200 });
    }

    return new NextResponse(null, { status: 400 });
}
