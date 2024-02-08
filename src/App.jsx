import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <div>Shop Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
