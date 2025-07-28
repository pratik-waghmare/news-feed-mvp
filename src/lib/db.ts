type Post = {
  id: string;
  name: string;
  createdAt: Date;
  post: string;
  likes: number;
};

export const posts: Post[] = Array.from({ length: 50 }).map((post, idx) => ({
  id: "post-" + idx,
  name: "Pratik",
  createdAt: new Date(Date.now() - idx * 1000 * 60),
  post: `Post ${idx}`,
  likes: Math.floor(Math.random() * 100),
}));

export const getPosts = (cursor: string | undefined, limit: number) => {
  if (!cursor) {
    return posts.slice(0, limit);
  }

  const cursorIndex = posts.findIndex((post) => post.id === cursor);
  const items = posts.slice(cursorIndex + 1, cursorIndex + 1 + limit);
  const nextCursor = items.length ? items[items.length - 1].id : null;

  return { items, nextCursor };
};
