import { useEffect, useState } from "react";

import "../Styles/Posts.css";

const Posts = () => {
  const [countPost, setCountPost] = useState(1);
  const [article, setArticle] = useState("");

  function nextPage() {
    setCountPost((count) => count + 1);
  }
  function backPage() {
    setCountPost((count) => count - 1);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + countPost)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [countPost]);

  return (
    <>
      <main className="post">
        <header>
          <p>{countPost}</p>
        </header>
        <button
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={backPage}
        >
          Back Post
        </button>
        <button onClick={nextPage}>Next Post</button>
        <article style={{ marginBottom: "10px" }}>{article.title}</article>
        <article>{article.body}</article>
      </main>
    </>
  );
};

export default Posts;
