import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Dashboard from "./component/pages/Dashboard";
import Todo from "./component/todo/Todo";
import Product from "./component/pages/Product/Product";
import Product_list from "./component/pages/Product/Product_list";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* This goes inside <Outlet /> */}
          <Route index element={<Dashboard />} />
          <Route path="todo" element={<Todo />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/list" element={<Product_list/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
