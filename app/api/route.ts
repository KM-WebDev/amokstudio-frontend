import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // const secret = process.env.REVALIDATE_SECRET;
    // if (reqSecret !== secret) {
    // return new Response("Invalid token", { status: 401 });
    // }
    // const actionType = request.headers.get("action-type");
    // console.log(actionType);
    console.log("Revalidating...");
    revalidatePath("/", "layout");
    revalidatePath("/portfolio/[productId]/page", "page");

    return NextResponse.json({ success: true });
}
