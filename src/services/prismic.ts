import * as prismic from "@prismicio/client";

export const client = prismic.createClient(
  process.env.NEXT_PUBLIC_REPONAME as string,
  {
    accessToken: process.env.NEXT_PUBLIC_TOKEN,
  }
);
