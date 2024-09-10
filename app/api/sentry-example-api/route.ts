/* eslint-disable no-unreachable */
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test's error monitoring
export function GET() {
  throw new Error("Example API Route Error");
  return NextResponse.json({ data: "Testing Error..." });
}
