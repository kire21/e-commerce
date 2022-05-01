import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";

const Shop = () => {
  return <div>I am the shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
