// import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { v1 as uuid } from "uuid";

import "./home.module.css";

const Home = () => {
  const navigate = useNavigate();
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
      <div className="buttons">
        {news.map((item) => {
          const { title } = item;
          return (
            <button
              onClick={() => navigate(`/${title}`, { state: item })}
              key={uuid()}
            >
              {title}
            </button>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
