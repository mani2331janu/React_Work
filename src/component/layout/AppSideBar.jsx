// AppSidebar.jsx
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import {
  Package,
  LayoutDashboard,
  CheckSquare,
  List,
  PlusSquare,
} from "lucide-react";

export default function AppSidebar() {
  const { pathname } = useLocation();

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
            button: ({ level, active }) => {
              // 🔹 styles for top-level (Dashboard, Todo, Product label)
              if (level === 0) {
                return {
                  borderRadius: 8,
                  padding: "8px 12px",
                  margin: "4px 12px",
                  fontWeight: active ? 600 : 400,
                  color: "white",
                  backgroundColor: active ? "black" : "transparent",

                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },

                  "&.active": {
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: 700,
                  },
                };
              }

              // 🔹 styles for submenu children (level 1)
              return {
                borderRadius: 6,
                padding: "6px 10px",
                margin: "4px 8px",
                fontWeight: active ? 600 : 400,
                color: "white",
                backgroundColor: active ? "#333" : "transparent", // dark gray when active

                "&:hover": {
                  backgroundColor: "#444", // lighter gray hover
                  color: "white",
                },

                "&.active": {
                  backgroundColor: "#333",
                  color: "white",
                  fontWeight: 700,
                },
              };
            },

            subMenuContent: {
              paddingLeft: 8,
              borderLeft: "1px solid rgba(255,255,255,0.25)",
              marginLeft: 12,
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              width: "227px",
            },
          }}
        >


          {/* Dashboard */}
          <MenuItem
            icon={<LayoutDashboard size={18} />}
            component={<NavLink to="/" end />}
          >
            Dashboard
          </MenuItem>

          {/* Todo */}
          <MenuItem
            icon={<CheckSquare size={18} />}
            component={<NavLink to="/todo" />}
          >
            Todo
          </MenuItem>

          <SubMenu
            label="Product"
            icon={<Package size={18} />}
            defaultOpen={pathname.startsWith("/product")}
            className={pathname.startsWith("/product") ? "active" : ""}
          >
            <MenuItem
              icon={<Package size={16} />}
              component={<NavLink to="/product" end />}
            >
              Overview
            </MenuItem>
            <MenuItem
              icon={<List size={16} />}
              component={<NavLink to="/product/list" />}
            >
              List
            </MenuItem>
            <MenuItem
              icon={<PlusSquare size={16} />}
              component={<NavLink to="/product/add" />}
            >
              Add New
            </MenuItem>
          </SubMenu>
         
        </Menu>
      </Sidebar>
    </aside>
  );
}
