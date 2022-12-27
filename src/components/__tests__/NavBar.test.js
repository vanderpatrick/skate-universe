import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";
/* eslint-disable */

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const signInLink = screen.getByRole("login");
  expect(signInLink).toBeInTheDocument();

  const RegisterLink = screen.getByRole("register");
  expect(RegisterLink).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
    
    const logInLink = await screen.findByRole("login");
    const RegisterLink = await screen.findByRole("register");
  
    expect(logInLink).toBeInTheDocument();
    expect(RegisterLink).toBeInTheDocument();
  });
