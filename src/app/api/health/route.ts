import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase";

export async function GET() {
  const supabase = await getSupabaseServer();
  return NextResponse.json({ ok: true, supabaseClientReady: Boolean(supabase) });
}
