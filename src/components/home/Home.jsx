// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v1 as uuid } from "uuid";

import "./home.module.css";

const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const apiKey = "L6k85Ai0gDrPx60p8q6aAyEBBNkqjD8D";
    const apiAdress =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=";
    const url = `${apiAdress}${apiKey}`;

    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);
      const { results } = data;
      setNews(results);
      console.log(news);
    } catch (error) {
      console.log("Api don't work");
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1>News Links</h1>
      <ul>
        {news.map((item, index) => {
          const { title, description, urlToImage, url } = item;
          return (
            <Link to={"/newslist"} key={uuid()} >
              <li>{title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
