import { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import "./news.css";
import { DotLoader } from "react-spinners";

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://sparsh-auth-production.up.railway.app/api/news-api/get-news")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result = result?.data?.reverse()
          setItems(result);
          console.log(result);
          console.log(result.data[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          position: "fixed",
          width: "100%",
          zIndex: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DotLoader color="white" />
      </div>
    );
  } else {
    return (
      <div id="news">
        <img
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          // onLoad={() => {
          //   setloading(false);
          // }}
          src="./login02.jpg"
        ></img>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.6,
          }}
        ></div>
        {items?.map((item) => (
          // <li key={item.id}>
          <NewsCard
            image={item.imageURL}
            heading={item.title}
            text={item.content}
          />
          // </li>
        ))}
      </div>
    );
  }
};

export default News;
