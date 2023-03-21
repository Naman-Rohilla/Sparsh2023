import { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import "./signin.css"

const SignIn=()=> {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://sparsh-auth-production.up.railway.app/api/news-api/get-news")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result.data[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="news">
        {items.data.map(item => (
          // <li key={item.id}>
            <NewsCard image={item.imageURL} heading={item.title} text={item.content}/>
          // </li>          
        ))}
      </div>
      
    );
  }
}

export default SignIn