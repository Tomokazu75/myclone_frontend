import { ChangeEvent, useEffect, useState } from "react";
import History from "../components/History";
import { createPost, deletePost } from "../api/post";
import Answer from "../components/Answer";
import Form from "../components/Form";
import OpenAI from "openai";
import { getAllPosts } from "../api/post";
import Hero from "../components/Hero";
import { Post } from "../types/post";

const Home = () => {
  //入力フォーム
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //OpenAI APIとの通信
  const [data, setData] = useState("");

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async () => {
    setHero(false);
    setLoading(true);
    const completion: any = await openai.chat.completions.create({
      messages: [
        { role: "system", content: import.meta.env.VITE_TOMOKAZU_DATA },
        { role: "user", content: value },
      ],
      model: "gpt-3.5-turbo-16k",
    });
    setData(completion.choices[0].message.content);
    setLoading(false);

    setSavePost({
      ...savePost,
      title: value,
      content: completion.choices[0].message.content
    });
  };

  //OpenAI APIからの返信待ち時のスピナー用
  const [loading, setLoading] = useState(false);

  //Heroコンテンツの表示切り替え用
  const [hero, setHero] = useState(true);

  //Rails APIに保存するデータ
  const [savePost, setSavePost] = useState({
    id: 0,
    title: "",
    content: "",
  });

  const handleSave = async () => {
    try {
      const res = await createPost(savePost);
      console.log(res.data);
      setValue("");
      setData("");
      setHero(true);
      handleGetAllPosts();
    } catch (e:any) {
      console.log(e);
      setData("エラーが発生しました");
    }
  };

  const handleNext = () => {
    setValue("");
    setData("");
    setHero(true);
  };

  //History一覧の表示
  const [posts, setPosts] = useState([]);

  const handleGetAllPosts = async () => {
    try {
      const res = await getAllPosts();
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  //Historyの削除ボタン
  const handleDeletePost = async (item: Post) => {
    console.log("click", item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      handleGetAllPosts();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Form
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {hero ? (
        <Hero />
      ) : (
        <Answer
          data={data}
          loading={loading}
          handleSave={handleSave}
          handleNext={handleNext}
        />
      )}
      <History posts={posts} handleDeletePost={handleDeletePost} />
    </>
  );
};

export default Home;
