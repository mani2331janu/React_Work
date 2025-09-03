import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/pages/Home";
import Todo from "./component/todo/Todo";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* This goes inside <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
