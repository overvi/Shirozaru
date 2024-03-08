import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const watchList = await prisma.watchList.findUnique({
    where: { userId: params.userId },
  });

  return NextResponse.json(watchList, { status: 200 });
}
