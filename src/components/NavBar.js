import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import { Tooltip } from "react-bootstrap";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addPostIcon = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts/create"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Add post</Tooltip>}
        >
          <i className="fa-solid fa-camera"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/videos/create"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Add Videos</Tooltip>}
        >
          <i className="fa-solid fa-video"></i>
        </OverlayTrigger>
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/videos"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Skate clips</Tooltip>}
        >
          <i className="fa-solid fa-play"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/favorites"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Favorites</Tooltip>}
        >
          <i className="fa-solid fa-star"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/dislikes"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Disliked</Tooltip>}
        >
          <i className="fa-solid fa-thumbs-down"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={40}
        />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Log in</Tooltip>}>
          <i className="fas fa-sign-in-alt"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Register</Tooltip>}
        >
          <i className="fas fa-user-plus"></i>
        </OverlayTrigger>
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Home</Tooltip>}
              >
                <i className="fas fa-home"></i>
              </OverlayTrigger>
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
