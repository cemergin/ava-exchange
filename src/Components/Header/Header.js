import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, Image, Icon } from "semantic-ui-react";
import logo from "../../Static/logo.svg";

const Header = props => {
  function isActive(route) {
    return route === props.location.pathname;
  }

  function handleLogout() {
    console.log("Log Out");
    props.history.push({ pathname: "/market" });
  }

  return (
    <Menu stackable fluid id="menu" inverted>
      <Link to="/">
        <Menu.Item header position="left" active={isActive("/")}>
          <Image size="mini" src={logo} style={{ marginRight: "1em" }} />
          AVA Exchange
        </Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Link to="/market">
          <Menu.Item header position="right" active={isActive("/market")}>
            <Icon name="money bill alternate" size="large">
              {" "}
            </Icon>
            Market
          </Menu.Item>
        </Link>
        {props.user ? (
          <>
            <Link to="/portfolio">
              <Menu.Item header active={isActive("/portfolio")}>
                <Icon name="shopping basket" size="large">
                  {" "}
                </Icon>
                Portfolio
              </Menu.Item>
            </Link>
            <Menu.Item onClick={handleLogout} header>
              <Icon name="sign out" size="large">
                {" "}
              </Icon>
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link to="/login">
              <Menu.Item header active={isActive("/login")}>
                <Icon name="sign in" size="large">
                  {" "}
                </Icon>
                Login
              </Menu.Item>
            </Link>
            <Link to="/signup">
              <Menu.Item header active={isActive("/signup")}>
                <Icon name="signup" size="large">
                  {" "}
                </Icon>
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(Header);
