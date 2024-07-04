// import Posts from "../Components/Posts";

import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <div className="textFont">
            <h1>Inspire your day with random quotes </h1>
            <p>This Post random and Quotes for Inspire you</p>
          </div>
          <div className="btn-group">
            <button onClick={() => (window.location.href = "/Posts")}>
              Posts
            </button>
            <button onClick={() => (window.location.href = "/Quotes")}>
              Quotes
            </button>
          </div>
        </div>
      </main>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Home;
