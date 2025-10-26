import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const envSecret = process.env.REVALIDATE_SECRET;

    const reqSecret = request.headers.get("x-sanity-secret");
    if (reqSecret !== envSecret) {
        return new Response("Invalid token", { status: 401 });
    }

    revalidatePath("/", "layout");
    revalidatePath("/portfolio/[productId]", "page");

    return NextResponse.json({ success: true });
}
