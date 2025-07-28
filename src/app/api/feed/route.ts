import { getPosts } from "newsfeed/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log('/feed/api/');
  // parse cursor
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get("cursor") || undefined;

  // call getPosts
  try {
    const posts = getPosts(cursor, 5);
    console.log(posts);

    return NextResponse.json(posts);
  } catch (err) {
    console.error("Failed to fetch posts", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
