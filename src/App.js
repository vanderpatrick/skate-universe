import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPages";
import { Container } from "react-bootstrap";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import NotFound from "./components/NotFound";
import VideoCreateForm from "./pages/videos/VideoCreateForm";
import VideoPostPage from "./pages/videos/VideoPostPage";
import VideoPostsPages from "./pages/videos/VideoPostsPages";
import VideoEditForm from "./pages/videos/VideoEditForm";
function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
        <Route
            exact
            path="/videos"
            render={() => (
              <VideoPostsPages message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/posts/favorites"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`favorites__owner__profile=${profile_id}&ordering=-favorites__created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/dislikes"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`dislike__owner__profile=${profile_id}&ordering=-dislike__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/videos/create" render={() => <VideoCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/videos/:id" render={() => <VideoPostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/videos/:id/edit" render={() => <VideoEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
