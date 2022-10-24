import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import NewsDetails from "./components/newsdetails/NewsDetails";


const App = () => {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news:" element={<NewsDetails/>}/>

    </Routes>
    <Footer/>
    </>
  );
}

export default App