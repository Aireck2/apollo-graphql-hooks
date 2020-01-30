import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [activeItem, setActiveItem] = React.useState("home");
  return (
    <Menu
      mode="horizontal"
      onClick={e => setActiveItem(e.key)}
      selectedKeys={[activeItem]}
    >
      <Menu.Item key="home">
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="login">
        <Link to="login">
          <Icon type="user" />
          <span>Login</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="register">
        <Link to="register">
          <Icon type="user-add" />
          <span>Register</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Menubar;
