import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./pages/auth/SignInForm";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/signin" render={() => <SignInForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
