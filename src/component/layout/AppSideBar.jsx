import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

export default function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar
      rootStyles={{
        ".ps-sidebar-container": {
          backgroundColor: "#eeeff0",
          color: "#333",
          // height: "100vh",
        },
      }}
    >
      <Menu>
        <MenuItem component={<Link to="/" />} active={pathname === "/"}>
          Dashboard
        </MenuItem>

        {/* Product SubMenu */}
        <SubMenu label="Product" defaultOpen={pathname.startsWith("/product")}>
          <MenuItem
            component={<Link to="/product" />}
            active={pathname === "/product"}
          >
             Product
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
