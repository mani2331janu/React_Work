// AppSidebar.jsx
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, sidebarClasses } from "react-pro-sidebar";
import {NavLink, Link, useLocation } from "react-router-dom";
import { Package, LayoutDashboard, CheckSquare, List, PlusSquare } from "lucide-react";

export default function AppSidebar() {
  const { pathname } = useLocation();

  const isProduct = pathname.startsWith("/product");

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 z-40 pt-16">
      <Sidebar
        width="16rem"
        backgroundColor="transparent"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: "linear-gradient(180deg, #7c3aed 0%, #d946ef 100%)",
            color: "white",
            borderRight: "0",
            height: "100vh",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => ({
              // base styles
              borderRadius: 8,
              padding: "8px 12px",
              margin: level === 0 ? "4px 12px" : "4px 8px",
              backgroundColor: active ? "rgba(255,255,255,0.15)" : "transparent",

              // hover state
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },

              // active state (when route matches)
              "&.active": {
                backgroundColor: "rgba(255,255,255,0.18)",
                color: "#b43131ff",
                fontWeight: 600,
              },
            }),

            subMenuContent: {
              paddingLeft: 8,
              borderLeft: "1px solid rgba(255,255,255,0.25)",
              marginLeft: 12,
            },
          }}
        >
          {/* menu items */}

        <MenuItem icon={<LayoutDashboard size={18} />} component={<NavLink to="/" />} >
          Dashboard
        </MenuItem>

        <MenuItem icon={<CheckSquare size={18} />} component={<NavLink to="/todo" />}>
          Todo
        </MenuItem>

        <SubMenu
          label="Product"
          icon={<Package size={18} />}
          defaultOpen={isProduct}
        // Or control explicitly: open={isProduct}
        >
          <MenuItem icon={<Package size={16} />} component={<NavLink to="/product" />}>
            Overview
          </MenuItem>
          <MenuItem icon={<List size={16} />} component={<NavLink to="/product/list" />}>
            List
          </MenuItem>
          <MenuItem icon={<PlusSquare size={16} />} component={<NavLink to="/product/add" />}>
            Add New
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
    </aside >
  );
}
