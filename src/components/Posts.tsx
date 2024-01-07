import { useEffect, useState } from "react";
import { getAllPosts } from "../api/post";
import { Post } from "../types/post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const handleGetAllPosts = async () => {
    try {
      const res = await getAllPosts();
      console.log(res.data);
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  return (
    <>
      <ul>
      {posts.map((post: Post) => (
        <li
          key={post.id}
          className="border border-solid border-gray-400"
        >
          <div>{post.title}</div>
          <p>{post.content}</p>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Posts