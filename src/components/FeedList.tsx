'use client';

import useFeedQuery from "newsfeed/hooks/useFeedQuery";
import useIntersectionObserver from "newsfeed/hooks/useIntersectionObserver";
import React from "react";

const FeedList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useFeedQuery();
  const paginationRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  console.log(data);
  const posts = data?.pages.flatMap((page) => page.items || []);

  if (isLoading) return <div className="p-4 text-gray-500">Loading...</div>;

  return (
    <div>
      <div className="border-1 min-w-[500px] h-[500px] overflow-auto">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="p-4 hover:bg-amber-50 flex flex-col gap-3 border-[0.5px] border-y-cyan-600"
          >
            <div className="flex justify-between items-center">
              <h3>{post.name}</h3>
              <label>{new Date(post.createdAt).toDateString()}</label>
            </div>
            <p className="px-3 py-2 bg-gray-50">{post.post}</p>
            <div>❤️ {post.likes}</div>
          </div>
        ))}
        <div ref={paginationRef} className="h-4 bg-blue-500"></div>
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="px-4 py-1 rounded-3 border-1 bg-amber-300"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Fetching next" : "Next"}
        </button>
      )}
    </div>
  );
};

export default FeedList;
