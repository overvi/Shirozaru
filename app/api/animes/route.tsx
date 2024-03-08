import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.anime.findMany({
    include: {
      coverImage: true,
      mainChars: true,
    },
  });

  return NextResponse.json(response, { status: 200 });
}
