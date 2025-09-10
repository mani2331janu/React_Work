import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Dashboard from "./component/pages/Dashboard";
import Todo from "./component/todo/Todo";
// import Product from "./component/pages/Product/Product";
import Product_list from "./component/pages/Product/Product_list";
import NewProduct from "./component/pages/Product/NewProduct";
import UpdateProduct from "./component/pages/Product/UpdateProduct";
import { createContext } from "react";
import Sign_in from "./component/auth/Sign_in";
export  const UserContent = createContext()
export default function App() {
  let user = {
    uName: "Manikandan"
  }
  return (
    <UserContent.Provider value={user}>

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Sign_in/>}/>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<Dashboard />} />
            <Route path="todo" element={<Todo />} />


            <Route path="product/add" element={<NewProduct />} />
            <Route path="product/list" element={<Product_list />} />
            <Route path="product/update/:id" element={<UpdateProduct />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </UserContent.Provider>
  );
}
