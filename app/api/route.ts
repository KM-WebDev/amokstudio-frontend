import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const envSecret = process.env.REVALIDATE_SECRET;

    const reqSecret = request.headers.get("x-sanity-secret");
    if (reqSecret !== envSecret) {
        return new Response("Invalid token", { status: 401 });
    }
    const { _id, _type } = await request.json();

    if (_type === "portfolio") {
        revalidatePath(`/portfolio/${_id}`, "page");
    } else {
        revalidatePath("/", "layout");
    }

    return NextResponse.json({ success: true });
}
