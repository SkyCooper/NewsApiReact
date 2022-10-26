// import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { v1 as uuid } from "uuid";

import ListStyle from "./newslist.module.css";

const NewsList = () => {
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
      <h1>Headlines..</h1>
      <div className={ListStyle.buttons}>
          {news.map((item) => {
            const { title } = item;
            return (
              <button
                onClick={() => navigate(`${title}`, { state: item })}
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

export default NewsList;
