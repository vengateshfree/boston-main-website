import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/user";


// export async function GET() {
//   return NextResponse.json({ message: "Hello API" });
// }


export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("Frontend body:", body);

    const user = await User.create(body);
    return NextResponse.json(user);
  } catch (err: any) {
    console.error("POST /api/users error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    await connectDB();

    const user = await User.find();
    return NextResponse.json(user);
  } catch (err: any) {
    console.error("POST /api/users error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
