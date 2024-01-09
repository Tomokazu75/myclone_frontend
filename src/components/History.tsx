import { Link } from "react-router-dom";
import { Post } from "../types/post";

type HistoryProps = {
  posts: never[];
  handleDeletePost: (item: Post) => Promise<void>;
}

const History: React.FC<HistoryProps> = ({posts, handleDeletePost}) => {
  return (
    <>
      <hr />
      <h2 className="text-3xl p-3 text-left font-bold">History</h2>
      <ul className="space-y-2">
      {posts.map((post: Post) => (
        <li
          key={post.id}
          className="bg-gray-100 border border-solid border-gray-200 rounded-2xl p-2 relative"
        >
          <Link to={`/posts/${post.id}`}>
            <h3 className="text-base md:text-lg font-bold text-indigo-400 pb-2 pr-6 truncate">『 {post.title} 』</h3>
            <button onClick={()=> handleDeletePost(post)} className="text-gray-400 text-2xl w-10 h-10 rounded-full rotate-45 absolute top-0 right-1">+</button>
            <p className="truncate">{post.content}</p>
          </Link>
        </li>
      ))}
      </ul>
    </>
  )
}

export default History