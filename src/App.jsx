import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Dashboard from "./component/pages/Dashboard";
import Todo from "./component/todo/Todo";
// import Product from "./component/pages/Product/Product";
import Product_list from "./component/pages/Product/Product_list";
import NewProduct from "./component/pages/Product/NewProduct";
import UpdateProduct from "./component/pages/Product/UpdateProduct";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="todo" element={<Todo />} />

          
          <Route path="/product/add" element={<NewProduct/>}/>
          <Route path="/product/list" element={<Product_list/>}/>
          <Route path="/product/update/:id" element={<UpdateProduct/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
