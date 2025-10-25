import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { setTimeout } from "timers/promises";

export async function POST(request: NextRequest) {
    // const secret = process.env.REVALIDATE_SECRET;
    // if (reqSecret !== secret) {
    // return new Response("Invalid token", { status: 401 });
    // }
    // const actionType = request.headers.get("action-type");
    // console.log(actionType);
    console.log("Revalidating...");
    await setTimeout(5000);
    console.log("Revalidated...");
    revalidatePath("/", "layout");
    revalidatePath("/portfolio/[productId]", "page");

    return NextResponse.json({ success: true });
}
