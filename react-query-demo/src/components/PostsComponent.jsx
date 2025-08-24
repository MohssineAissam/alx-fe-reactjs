import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true, 
    keepPreviousData: true,     
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 border rounded w-full max-w-2xl">
      <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
        Posts
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Refresh
        </button>
      </h2>

      {isFetching && <p className="text-gray-500">Refreshing data...</p>}

      <ul className="list-disc list-inside space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <span className="font-semibold">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
