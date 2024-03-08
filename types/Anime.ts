import { Prisma } from "@prisma/client";

const AnimeFull = Prisma.validator<Prisma.AnimeArgs>()({
  include: {
    coverImage: true,
  },
});

const AnimeChars = Prisma.validator<Prisma.AnimeArgs>()({
  include: {
    mainChars: true,
  },
});

export type AnimeFull = Prisma.AnimeGetPayload<typeof AnimeFull>;
export type AnimeChars = Prisma.AnimeGetPayload<typeof AnimeChars>;
