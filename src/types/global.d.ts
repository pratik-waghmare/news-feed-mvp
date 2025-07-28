// types/global.d.ts
import mongoose from "mongoose";

declare global {
  var _mongoose:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

export {}; // required for global files
