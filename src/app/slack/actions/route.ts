import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (body["type"] === "block_actions") {
        try {
            console.log(body["action"]["action_id"])
            return new NextResponse(null, { status: 200 });
        } catch (e: any) {
            return new NextResponse(JSON.stringify({ error: e.message }), { status: 400 });
        }
    }

    return new NextResponse(null, { status: 400 });
}
