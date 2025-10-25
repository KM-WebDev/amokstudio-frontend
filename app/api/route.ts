export async function POST(request: Request) {
    // const secret = process.env.REVALIDATE_SECRET;
    const { path, secret: reqSecret } = await request.json();
    // if (reqSecret !== secret) {
    // return new Response("Invalid token", { status: 401 });
    // }
    console.log(request.headers);
    const actionType = request.headers.get("action-type");
    console.log(actionType);
    return new Response("", { status: 200 });
    // return new Response(`Revalidated ${path}`, { status: 200 });
}
