import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (body["type"] === "block_actions") {
        console.log(body["actions"][0]["action_id"])
        return new NextResponse(null, { status: 200 });
    }

    return new NextResponse(null, { status: 400 });
}
