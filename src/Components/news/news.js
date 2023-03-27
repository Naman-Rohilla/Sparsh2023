import { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import "./news.css";
import { DotLoader } from "react-spinners";

const News = (data) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "https://sparsh-auth-production-5f74.up.railway.app/api/news-api/get-news"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          var flags = [],
            output = [],
            l = result?.data?.length,
            i;
          for (i = 0; i < l; i++) {
            if (flags[result?.data[i]?.title]) continue;
            flags[result?.data[i]?.title] = true;
            output.push(result?.data[i]);
          }
          console.log(output, "output");
          result = output?.reverse();
          console.log(result);
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
          // <li key={item.id}
          <>
            {items.title == "Flash Mob 6.3" ||
            items.title == "Sparsh T-Shirt 2nd Slot" ? (
              <a
                href={
                  items.title == "Sparsh T-Shirt 2nd Slot"
                    ? "https://forms.gle/chQHeSbGnhTn6wA67"
                    : "https://www.instagram.com/reel/CqNqzHXppp_/?igshid=YmMyMTA2M2Y="
                }
              >
                <NewsCard
                  image={item.imageURL}
                  heading={item.title}
                  text={item.content}
                />
              </a>
            ) : (
              <a
                onCLiick={() => data.data.setactiveUrl("/events")}
                href="/events"
              >
                <NewsCard
                  image={item.imageURL}
                  heading={item.title}
                  text={item.content}
                />
              </a>
            )}
          </>

          // </li>
        ))}
      </div>
    );
  }
};

export default News;
