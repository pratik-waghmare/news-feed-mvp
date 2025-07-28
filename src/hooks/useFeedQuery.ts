"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Post } from "newsfeed/lib/db";

export type FeedResponse = {
  items: Post[];
  nextCursor: string | null;
};

const useFeedQuery = () => {
  return useInfiniteQuery<FeedResponse>({
    queryKey: ["feed"],
    queryFn: async ({ pageParam = undefined }) => {
      const post = await fetch(`/api/feed?cursor=${pageParam}`);

      return post.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined,
  });
};

export default useFeedQuery;
