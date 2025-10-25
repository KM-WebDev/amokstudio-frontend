import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // const secret = process.env.REVALIDATE_SECRET;
    // if (reqSecret !== secret) {
    // return new Response("Invalid token", { status: 401 });
    // }
    // const actionType = request.headers.get("action-type");
    // console.log(actionType);
    revalidatePath("/", "layout");
    revalidatePath("/portfolio/[productId]", "page");
    return NextResponse.json({ success: true });
}
