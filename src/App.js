import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import NewsDetails from "./components/newsdetails/NewsDetails";
import NewsList from "./components/newsList/NewsList";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="newslist" element={<NewsList />}>
          <Route path=":title" element={<NewsDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
