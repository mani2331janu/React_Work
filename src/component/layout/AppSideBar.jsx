// src/component/layout/AppSidebar.jsx
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

export default function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar
      rootStyles={{
        ".ps-sidebar-container": {
          // backgroundColor: "#1f2937", // dark gray to match header/footer
          // color: "#ffffff",           // white text
          position: "fixed",
          height: "100vh",
          width: "249px",
        },
        // ".ps-menu-button:hover": {
        //   backgroundColor: "#374151", // slightly lighter on hover
        // },
        // ".ps-menu-button.active": {
        //   backgroundColor: "#4b5563", // active menu color
        // },
      }}
    >
      <Menu>
        <MenuItem component={<Link to="/" />} active={pathname === "/"}>
          Dashboard
        </MenuItem>

        <SubMenu label="Product" defaultOpen={pathname.startsWith("/product")}>
          <MenuItem
            component={<Link to="/product" />}
            active={pathname === "/product"}
          >
            Product
          </MenuItem>
          <MenuItem
            component={<Link to="/product/add" />}
            active={pathname === "/product/add"}
          >
            New Product
          </MenuItem>
          <MenuItem
            component={<Link to="/product/list" />}
            active={pathname === "/product/list"}
          >
            Product List
          </MenuItem>


        </SubMenu>

        <MenuItem component={<Link to="/todo" />} active={pathname === "/todo"}>
          Todo
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
