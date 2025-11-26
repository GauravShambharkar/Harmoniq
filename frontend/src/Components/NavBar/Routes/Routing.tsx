import { Routes, Route } from "react-router-dom";
import Feed from "../../Feed/Feed";
import Home from "../../Home/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="feed" element={<Feed/>} />
      </Routes>
    </>
  );
};

export default Routing;
