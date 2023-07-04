import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const payload = (await request.formData()).get("payload")?.toString();
        if (payload) {
            const body = JSON.parse(payload);
            if (body["type"] === "block_actions") {
                console.log(body["actions"][0]["action_id"])
                return new NextResponse(null, { status: 200 });
            }
            return new NextResponse(null, { status: 400 });
        }

    } catch (e: any) {
        return new NextResponse(JSON.stringify({ error: e.message }), { status: 400 });
    }
}
