import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication.js";

import Home from "./routes/home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./routes/shop/Shop.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
