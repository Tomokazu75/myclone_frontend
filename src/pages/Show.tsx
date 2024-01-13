import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDetailPost } from '../api/post';
import { Link } from 'react-router-dom';

const Show = () => {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    content: "",
  });

  const query = useParams();

  const handleGetDetailPost = async (query:any) => {
    try {
      const res = await getDetailPost(query.id);
      setPost({
        id: res.data.id,
        title: res.data.title,
        content: res.data.content,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetDetailPost(query);
  }, [query]);

  return (
    <>
      <div className="bg-gray-100 border border-solid border-gray-200 rounded-2xl p-2">
        <h3 className="text-lg font-bold text-indigo-400 p-2">『 {post.title} 』</h3>
        <p className='h-auto text-left tracking-wide leading-8'>{post.content}</p>
      </div>
      <Link
        to="/"
        className="bg-blue-400 rounded-full text-gray-50 hover:bg-blue-500 transition duration-300 p-2 block mt-2 w-16 mx-auto"
      >戻る</Link>
    </>
  )
}

export default Show