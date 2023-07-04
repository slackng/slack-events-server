import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        if (body["type"] === "block_actions") {
            console.log(body["actions"][0]["action_id"])
            return new NextResponse(null, { status: 200 });
        }
        return new NextResponse(null, { status: 400 });

    } catch (e: any) {
        console.error(body);
        return new NextResponse(JSON.stringify({ error: e.message }), { status: 400 });
    }
}
