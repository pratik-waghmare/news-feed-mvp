import { connectDB } from "newsfeed/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    return NextResponse.json({ message: "Connected successfully!" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
};
