import { Post as PostType } from '../lib/types/post';
import Post from './post';

export default function PostsContainer({ posts }: { posts: PostType[] }) {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

