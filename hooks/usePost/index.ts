import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
  const parsed = (await fetch('/api/hello'))
  console.log(parsed,'dawdaw')
  return parsed
}
const usePosts = (limit: number) => {
    return useQuery(["posts", limit], () => fetchPosts(limit));
};

export { usePosts, fetchPosts }
