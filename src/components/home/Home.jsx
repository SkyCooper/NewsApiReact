import HomeStyle from "./home.module.css"
import nytimes from "../../data/nytimes.jpg"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={HomeStyle.container}>
      <h1>Welcome NYT</h1>
      <img src={nytimes} alt="nyt" className={HomeStyle.nyt} />
      <button onClick={()=> navigate("newslist")}>Click For News List</button>
    </div>
  );
}

export default Home