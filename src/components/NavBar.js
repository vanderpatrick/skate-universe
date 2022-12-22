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

  const addPostIcon = <></>;
  const loggedInIcons = (
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
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/videos"
      >
        <OverlayTrigger placement="bottom" overlay={<Tooltip> Clips</Tooltip>}>
          <i className="fa-solid fa-play"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/videos/favorites"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Favorite Clips</Tooltip>}
        >
          <i className="fa-regular fa-file-video"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts/favorites"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Favorite Posts</Tooltip>}
        >
          <i className="fa-solid fa-star"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <OverlayTrigger placement="bottom" overlay={<Tooltip>LogOut</Tooltip>}>
          <i className="fas fa-sign-out-alt"></i>
        </OverlayTrigger>
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
        role="login"
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Log in</Tooltip>}>
          <i className="fas fa-sign-in-alt">Log in</i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        role="register"
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
      className={`${styles.NavBar} ml-auto`}
      expand="md"
      fixed="top"
      navbarscroll="true"
    >
      <Container>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/"
        >
          <Navbar.Brand>
            <img src={logo} alt="logo" height="30" />
          </Navbar.Brand>
          Skate Universe
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          className="{styles.Test}"
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse className="ml-auto" id="navbarScroll">
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
