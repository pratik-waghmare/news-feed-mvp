import { connectDB } from "newsfeed/lib/db";
import User from "newsfeed/models/user";
import { NextResponse } from "next/server";

export const POST = async () => {
  await connectDB();

  const existingUser = await User.findOne({ email: "example@gmail.com" });

  if (existingUser) {
    return NextResponse.json({ message: "Seed already exists!" });
  }

  const user = User.create({
    email: "example@gmail.com",
    passwordHash: "password",
    displayName: "John Doe",
  });

  return NextResponse.json({ message: "Seeded successfully!" });
};
